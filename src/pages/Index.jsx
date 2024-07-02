import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";

const Index = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", searchTerm],
    queryFn: () => fetchProducts(searchTerm),
    enabled: !!searchTerm,
  });

  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to ElectroMart</h1>
        <p className="text-lg">Your one-stop shop for the latest electronics</p>
        <Button onClick={() => navigate("/products")}>Shop Now</Button>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
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

export default Index;