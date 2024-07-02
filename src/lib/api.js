export const fetchProducts = async (searchTerm) => {
  const response = await fetch(`/api/products?search=${searchTerm}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};