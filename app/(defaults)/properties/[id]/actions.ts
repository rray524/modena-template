export const fetchSingleProperty = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/all-properties/${id}`,
      {
        next: { revalidate: 0 },
      }
    );

    if (!response.ok) {
      console.error(
        `Error fetching property with id ${id}: Network response was not ok`
      );
      return null;
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching property with id ${id}:`, error);
    throw error;
  }
};
