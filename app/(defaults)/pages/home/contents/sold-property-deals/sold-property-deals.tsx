"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { PropertyDetails } from "@/types/property-preconstructed-types";
import { useEffect, useState } from "react";
import { formatPrice, pluralize, truncateText } from "@/helpers/utils";
import SectionTitle from "@/components/section-title/section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faShower } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Pagination } from "@/components/pagination/pagination";
import PropertyLoaderFallback from "@/components/property-loader";
import { fetchProperties } from "../../action";

const SoldPropertyDeals: React.FC = () => {
  const [property, setProperty] = useState<PropertyDetails[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(property.length / itemsPerPage);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      try {
        const res = await fetchProperties("sold");
        setProperty(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  const currentItems = property.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4">
      <div className="my-10">
        <SectionTitle
          title="Sold Property Deals"
          paragraph=""
          textAlign="center"
        />
      </div>
      <div className=" mb-7">
        {loadingData ? (
          <div className="container">
            <div className="flex flex-wrap -mx-4 my-10">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  className={`w-full xl:w-1/2 lg:w-1/2 md:w-1/2 px-4 mb-8`}
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
          <div className="max-w-[1320px] mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {currentItems.map((card, index) => (
              <Link key={index} href={`/properties/${card._id}`}>
                <div className="w-full lg:max-w-full border border-gray-300 lg:flex bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="overflow-hidden h-[280px] lg:h-[358px] w-full lg:w-[16rem] flex-none relative">
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
                      height={600}
                      className="object-cover h-full w-full"
                      priority
                    />

                    <span className="absolute top-0 right-0 bg-red-500 m-2 p-1 text-[10px] font-semibold text-white">
                      {card.category === "sold" ? "Sold" : "New"}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-[15px] mb-3 text-left font-bold">
                        {card.name}
                      </p>
                      <div className="text-gray-900 text-left text-2xl mb-3">
                        {`$${formatPrice(card?.general_details.price)}`}
                      </div>
                      <p className="text-gray-700 text-left text-xl">
                        {truncateText(card.general_details.address, 140)}
                      </p>
                    </div>
                    <div className="flex items-center flex-wrap gap-3">
                      <p className="text-gray-500 text-[18px] leading-none mr-4 border border-gray-300 p-5 flex gap-1">
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
                      </p>
                      <p className="text-gray-500 text-[18px] leading-none border border-gray-300 p-5 flex gap-1">
                        <FontAwesomeIcon
                          icon={faShower}
                          className="text-green-500 w-4 h-4"
                        />
                        <div className="flex gap-2 items-center">
                          <span>{card.at_a_glance.baths}</span>
                          <span>
                            {pluralize(
                              card.at_a_glance.baths,
                              "Bathroom",
                              "Bathrooms"
                            )}
                          </span>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="max-h-14 w-full mx-auto">
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
      <hr className="h-px my-10 bg-gray-400 border-0" />
    </div>
  );
};

export default SoldPropertyDeals;
