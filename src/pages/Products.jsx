import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
  { id: 4, name: "Smartwatch", price: "$299", image: "/images/smartwatch.jpg" },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Products</h1>
      </header>

      <section className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sampleProducts.map((product) => (
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;