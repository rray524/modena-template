import SectionTitle from "@/components/section-title/section-title";
import { render, screen } from "@testing-library/react";

describe("SectionTitle Component", () => {
  it("renders title correctly", () => {
    render(<SectionTitle title="Main Title" />);
    const titleElement = screen.getByText(/Main Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<SectionTitle title="Main Title" paragraph="Subtitle" />);
    const subtitleElement = screen.getByText(/Subtitle/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <SectionTitle title="Main Title" paragraph="This is a description" />
    );
    const descriptionElement = screen.getByText(/This is a description/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("applies custom classes correctly", () => {
    render(
      <SectionTitle
        title="Main Title"
        paragraph="Subtitle"
        titleClass="text-red-500"
      />
    );
    const titleElement = screen.getByText(/Main Title/i);
    expect(titleElement).toHaveClass("text-red-500");
  });

  it("renders without subtitle and description", () => {
    render(<SectionTitle title="Main Title" />);
    const titleElement = screen.getByText(/Main Title/i);
    expect(titleElement).toBeInTheDocument();
    expect(screen.queryByText(/Subtitle/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/This is a description/i)
    ).not.toBeInTheDocument();
  });
});
