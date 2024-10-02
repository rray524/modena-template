import React, { Suspense, use } from "react";
import { fetchSingleProperty } from "./actions";
import { ContactCard } from "./component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { formatPrice, pluralize } from "@/helpers/utils";
import Link from "next/link";
import { ImageCarousel } from "./content/carousel";
import { ProductDetails } from "./content/property-content";
import LoadingFallback from "./content/loading-fallback";
import PropertyNotFoundFallback from "./content/property-error-handler-fallback";
interface PageProps {
  params: {
    id: string;
  };
}
export async function generateMetadata({ params }: PageProps) {
  const property = await fetchSingleProperty(params.id);

  return {
    title: property?.exterior.property_type || "Property Details",
    description:
      property?.property_description || "Detailed view of the property",
  };
}
const PropertyDetails = ({ params }: PageProps) => {
  const property = use(fetchSingleProperty(params.id));
  if (!property) {
    return <PropertyNotFoundFallback />;
  }
  return (
    <>
      <ImageCarousel images={property.image_urls} />
      <div className="my-10 max-w-[1320px] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-1 md:text-right md:justify-items-right  lg:grid-cols-3 py-5 px-5 sm:px-12 gap-5">
          <ProductDetails
            city={property.city}
            title={"Comfortable Apartment With Great View"}
            description={property.property_description}
            property={property}
          />

          <div className="flex flex-col lg:order-last order-first justify-center items-center">
            <div className="my-6 bg-white rounded-lg border border-gray-300 dark:border-gray-700 h-[212px] w-full sm:w-[320px]">
              <div className="h-[30px] overflow-hidden rounded-t-lg relative">
                <span className="absolute top-0 right-0 bg-green-500 m-2 p-1 text-[10px] font-semibold text-white">
                  {property.category === "new" ? "New" : "Sold"}
                </span>
              </div>
              <Link href="#">
                <h5 className="my-2 text-[14px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-gray-700 text-left">
                  {property.general_details.directions}
                </h5>
              </Link>
              <p className="mb- font-normal mx-4 text-[22px] text-gray-500 dark:text-gray-400 text-left">
                ${formatPrice(property.general_details.price)}
              </p>
              <p className="mb-3 font-[14px] mx-4 text-gray-500 dark:text-gray-400 text-left">
                {property.general_details?.address}
              </p>
              <div className="pt-4 pb-2 border-t border-gray-300">
                <div className="flex justify-between px-3">
                  <span className="flex gap-2 items-center px-3 py-1 text-[13px] font-semibold border  border-gray-300 opacity-85 text-gray-700 mr-2 mb-2 text-left">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="text-green-500 w-4 h-4"
                    />
                    <div className="flex gap-2">
                      <span>{property.at_a_glance.beds}</span>
                      <span>
                        {pluralize(
                          property.at_a_glance.beds,
                          "Bedroom",
                          "Bedrooms"
                        )}{" "}
                      </span>
                    </div>
                  </span>

                  <span className="flex gap-2 items-center px-3 py-1 text-[13px] font-semibold border opacity-85 border-gray-300 text-gray-700 mb-2 text-left">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="text-green-500 w-4 h-4"
                    />
                    <div className="flex gap-2">
                      <span>{property.at_a_glance.baths}</span>
                      <span>
                        {pluralize(
                          property.at_a_glance.baths,
                          "Bath Room",
                          "Bath Rooms"
                        )}
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <ContactCard />
          </div>
        </div>
      </div>
    </>
  );
};

const PropertyDetailsPage = (props: PageProps) => (
  <Suspense fallback={<LoadingFallback />}>
    <PropertyDetails {...props} />
  </Suspense>
);

export default PropertyDetailsPage;
