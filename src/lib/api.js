export const fetchProducts = async ({ searchTerm, category, priceRange, brand }) => {
  const query = new URLSearchParams({ search: searchTerm, category, priceRange, brand }).toString();
  const response = await fetch(`/api/products?${query}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};