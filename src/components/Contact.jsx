import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 ">
      <hr />
      <div className="flex w-full rounded bg-white p-10 shadow-md ">
        {/* Left Column: Contact Form */}

        <div className="flex-1 bg-white p-8">
          <h2 className="mb-4 text-center text-3xl font-semibold">
            Contact Us
          </h2>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="message" value="Your message" />
              </div>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                required
                rows={4}
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>

        {/* Right Column: Text */}
        <div className="flex-1 bg-gray-50 p-8">
          <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
          <p className="mb-4 text-gray-700">
            At WiSol, we love to hear from our customers! Whether you have a
            question, a suggestion, or simply want to share your love for our
            coffee and cakes, we're here for you.
          </p>
          <p className="mb-4 text-gray-700">
            Visit us at:
            <br />
            <strong>WiSol Coffee & Cake Shop</strong>
            <br />
            123 Delicious Avenue
            <br />
            Flavor Town, FT 45678
          </p>
          <p className="mb-4 text-gray-700">
            Opening Hours:
            <br />
            Monday - Friday: 7:00 AM - 7:00 PM
            <br />
            Saturday - Sunday: 8:00 AM - 8:00 PM
          </p>
          <p className="mb-4 text-gray-700">
            Get in touch:
            <br />
            Phone: (123) 456-7890
            <br />
            Email: contact@wisol.com
          </p>
          <p className="text-gray-700">
            Follow us on social media for the latest updates, special offers,
            and behind-the-scenes looks at WiSol!
          </p>
        </div>
      </div>
    </div>
  );
}
