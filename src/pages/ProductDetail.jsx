import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg", description: "A high-end smartphone with a sleek design and powerful features." },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg", description: "A powerful laptop with a high-resolution display and fast performance." },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg", description: "Noise-cancelling headphones with superior sound quality." },
  { id: 4, name: "Smartwatch", price: "$299", image: "/images/smartwatch.jpg", description: "A stylish smartwatch with fitness tracking and notifications." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl">{product.name}</CardTitle>
          <p className="text-xl">{product.price}</p>
          <p className="mt-4">{product.description}</p>
        </CardContent>
        <CardFooter>
          <Button>Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetail;