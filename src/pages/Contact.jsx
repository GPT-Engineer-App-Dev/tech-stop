import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>

      <section className="space-y-4">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <Input id="name" type="text" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <Input id="email" type="email" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <Input id="subject" type="text" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <Textarea id="message" />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      <footer className="text-center space-y-4">
        <p className="text-lg">Address: 123 ElectroMart St, Tech City</p>
        <p className="text-lg">Phone: (123) 456-7890</p>
        <p className="text-lg">Email: support@electromart.com</p>
      </footer>
    </div>
  );
};

export default Contact;