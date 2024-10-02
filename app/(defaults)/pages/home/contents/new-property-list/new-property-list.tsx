"use client";
import SectionTitle from "@/components/section-title/section-title";
import { formatPrice, pluralize, truncateText } from "@/helpers/utils";
import { PropertyDetails } from "@/types/property-preconstructed-types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faShower } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "@/components/pagination/pagination";
import PropertyLoaderFallback from "@/components/property-loader";
import { fetchProperties } from "../../action";

const NewPropertyLists = () => {
  const [properties, setProperties] = useState<PropertyDetails[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      try {
        const res = await fetchProperties("new");
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  const currentItems = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col -mx-4 mt-10">
        <div className="my-5 mx-auto w-full">
          <SectionTitle
            title="Best Property Deals"
            paragraph=""
            textAlign="center"
          />
        </div>
        {loadingData ? (
          <div className="container">
            <div className="flex flex-wrap -mx-4 my-10">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  className={`w-full xl:w-1/4 lg:w-1/3 md:w-1/2 px-4 mb-8`}
                  key={index}
                >
                  <div key={index} className="border border-gray-200 p-4">
                    <PropertyLoaderFallback />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : currentItems.length !== 0 ? (
          <div
            className={`grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 px-4 sm:px-12 py-12`}
          >
            {currentItems.map((card, index) => (
              <Link
                href={`/properties/${card._id}`}
                key={index}
                className="mb-2"
              >
                <div className="bg-white rounded-lg shadow-xl border border-gray-300 dark:border-gray-700">
                  <div className="h-[225px] overflow-hidden rounded-t-lg relative">
                    <span className="absolute top-0 left-0 bg-green-500 m-2 p-1 text-[10px] font-semibold text-white capitalize">
                      {card.available_for}
                    </span>
                    <Image
                      src={
                        card.image_urls.length > 0
                          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${card.image_urls[0]}`
                          : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      alt="Property Image"
                      width={600}
                      height={300}
                      layout="responsive"
                      className="!h-[310px]"
                      priority
                    />
                    <span className="absolute top-0 right-0 bg-green-500 m-2 p-1 text-[10px] font-semibold text-white">
                      {card.category === "new" ? "New" : "Sold"}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="mb-1 text-[22px] font-normal text-gray-500 dark:text-gray-700 text-left">
                      {`$${formatPrice(card?.general_details.price)}`}
                    </p>
                    <p className="mb-3 text-[14px] font-normal text-gray-500 dark:text-gray-700 text-left h-12">
                      {truncateText(card.general_details.address, 140)}
                    </p>
                    <div className="pt-4 pb-2 border-t border-gray-300">
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <span className="flex gap-2 items-center px-3 py-1 text-[13px] font-semibold border border-gray-300 text-gray-700 text-left">
                          <FontAwesomeIcon
                            icon={faBed}
                            className="text-green-500 w-4 h-4"
                          />
                          <div className="flex gap-2 items-center">
                            <span>{card.at_a_glance.beds}</span>
                            <span>
                              {pluralize(
                                card.at_a_glance.beds,
                                "Bedroom",
                                "Bedrooms"
                              )}
                            </span>
                          </div>
                        </span>
                        <span className="flex gap-2 items-center px-3 py-1 text-[13px] font-semibold border border-gray-300 text-gray-700 text-left">
                          <FontAwesomeIcon
                            icon={faShower}
                            className="text-green-500 w-4 h-4"
                          />
                          <div className="flex gap-2 items-center">
                            <span>{card.at_a_glance.baths}</span>
                            <span>
                              {pluralize(
                                card.at_a_glance.baths,
                                "Bath Room",
                                "Bath Rooms"
                              )}
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className=" max-h-14 w-full mx-auto">
            <h4 className="text-gray-600 dark:text-gray-100 text-center font-bold">
              No property listed yet!
            </h4>
          </div>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </section>
  );
};

export default NewPropertyLists;
