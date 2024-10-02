import React from "react";
import { render, screen } from "@testing-library/react";
import bannerImage from "@/assets/banner.jpg";
import CommonBanner from "@/components/banner";
import { StaticImageData } from "next/image";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
  }: {
    src: string | StaticImageData;
    alt: string;
    // eslint-disable-next-line @next/next/no-img-element
  }) => <img src={typeof src === "string" ? src : src.src} alt={alt} />,
}));

describe("CommonBanner", () => {
  const bannerHeader = "Welcome to Our Site";
  const bannerDetailsText = "Best place to find everything you need";
  const backgroundImage = bannerImage;

  it("renders the banner header and details text", () => {
    render(
      <CommonBanner
        backgroundImage={backgroundImage}
        bannerHeader={bannerHeader}
        bannerDetailsText={bannerDetailsText}
      />
    );

    expect(
      screen.getByRole("heading", { name: bannerHeader })
    ).toBeInTheDocument();

    expect(screen.getByText(bannerDetailsText)).toBeInTheDocument();
  });

  it("renders the background image", () => {
    render(
      <CommonBanner
        backgroundImage={backgroundImage}
        bannerHeader={bannerHeader}
        bannerDetailsText={bannerDetailsText}
      />
    );

    const backgroundImg = screen.getByAltText("Background");
    expect(backgroundImg).toBeInTheDocument();
    expect(backgroundImg).toHaveAttribute("src", backgroundImage.src);
  });

  it("applies the default overlay opacity", () => {
    render(
      <CommonBanner
        backgroundImage={backgroundImage}
        bannerHeader={bannerHeader}
        bannerDetailsText={bannerDetailsText}
      />
    );

    const overlay = screen.getByTestId("overlay");
    expect(overlay).toHaveStyle({ opacity: "0.5" });
  });

  it("applies a custom overlay opacity", () => {
    const customOpacity = 0.8;

    render(
      <CommonBanner
        backgroundImage={backgroundImage}
        bannerHeader={bannerHeader}
        bannerDetailsText={bannerDetailsText}
        overlayOpacity={customOpacity}
      />
    );

    const overlay = screen.getByTestId("overlay");
    expect(overlay).toHaveStyle({ opacity: customOpacity.toString() });
  });
});
