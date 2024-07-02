import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [brand, setBrand] = useState("");

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", searchTerm, category, priceRange, brand],
    queryFn: () => fetchProducts({ searchTerm, category, priceRange, brand }),
    enabled: !!searchTerm || !!category || !!priceRange || !!brand,
  });

  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Products</h1>
      </header>

      <section className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 md:mb-0"
          />
          <Select onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              <SelectItem value="smartphones">Smartphones</SelectItem>
              <SelectItem value="laptops">Laptops</SelectItem>
              <SelectItem value="headphones">Headphones</SelectItem>
              <SelectItem value="smartwatches">Smartwatches</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setPriceRange}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Prices</SelectItem>
              <SelectItem value="0-200">$0 - $200</SelectItem>
              <SelectItem value="200-500">$200 - $500</SelectItem>
              <SelectItem value="500-1000">$500 - $1000</SelectItem>
              <SelectItem value="1000+">$1000+</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setBrand}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Brands</SelectItem>
              <SelectItem value="brandA">Brand A</SelectItem>
              <SelectItem value="brandB">Brand B</SelectItem>
              <SelectItem value="brandC">Brand C</SelectItem>
              <SelectItem value="brandD">Brand D</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            products.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent>
                  <CardTitle>{product.name}</CardTitle>
                  <p>{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => navigate(`/products/${product.id}`)}>View Details</Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;