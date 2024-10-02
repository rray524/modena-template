"use client";
import React, { FC } from "react";
import { useEffect, useState } from "react";
import { PropertyCard } from "./property-card";
import Link from "next/link";
import { PropertyDetails } from "@/types/property-preconstructed-types";
import { Divider } from "./divider";
import PropertyLoaderFallbackFooter from "./animate-skeleton-property";
import FooterTitle from "./footer-title";
import { fetchProperties } from "@/app/(defaults)/pages/home/action";

const FooterProperties: FC = () => {
  const [properties, setProperties] = useState<PropertyDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchProperties("new");
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <PropertyLoaderFallbackFooter />;
  }

  if (properties.length === 0) {
    return <div>No properties found</div>;
  }

  return (
    <div className="text-white">
      <FooterTitle title="LATEST PROPERTIES" />
      <div className="grid gap-4">
        {properties.slice(0, 3).map((property, index) => (
          <React.Fragment key={property._id}>
            <Link href={`/properties/${property._id}`}>
              <PropertyCard
                src={
                  property.image_urls.length > 0
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${property.image_urls[0]}`
                    : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                }
                title={property.general_details.address}
                price={Number(property.general_details.price)}
              />
            </Link>
            {index < properties.slice(0, 3).length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FooterProperties;
