import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const sampleCartItems = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg", quantity: 1 },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg", quantity: 1 },
];

const Cart = () => {
  const totalPrice = sampleCartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Your Cart</h1>
      </header>

      <section className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {sampleCartItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent>
                <CardTitle>{item.name}</CardTitle>
                <p>{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </CardContent>
              <CardFooter>
                <Button>Remove</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <footer className="text-center space-y-4">
        <p className="text-xl">Total Price: ${totalPrice.toFixed(2)}</p>
        <Button>Proceed to Checkout</Button>
      </footer>
    </div>
  );
};

export default Cart;