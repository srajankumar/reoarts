"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const emailServiceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
const emailTemplateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
const emailApiKey = process.env.NEXT_PUBLIC_API_KEY!;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: name,
        reply_to: email,
        to_name: "kumarsrajan02@gmail.com",
        subject: subject,
        message: message,
      };

      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        templateParams,
        emailApiKey
      );

      alert("Message sent!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      alert("Error! Please try again.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="relative justify-center xl:rounded-t-[20rem] lg:rounded-t-[15rem] md:rounded-t-[12rem] sm:rounded-t-[10rem] rounded-t-[7rem] flex bg-[#0d0d0d] min-h-screen ">
      <div className="absolute bottom-0 right-0 w-[24.9%] h-[34.9%] bg-white" />
      <div className="absolute bottom-0 right-0 w-[25%] h-[35%] bg-[#0d0d0d] rounded-br-full z-10" />
      <div className="flex tracking-wide px-8 md:px-10">
        <main className="max-w-6xl py-10">
          <div className="min-h-screen flex justify-center flex-col">
            <h1 className="text-secondary text-4xl font-extrabold">CONTACT</h1>
            <div className="py-3 md:w-3/4 text-white">
              Gift a touch of art! For personalized portraits or inquiries about
              my work, reach out to me. Let's chat about bringing beauty into
              your space!
            </div>
            <form onSubmit={handleSubmit} className="z-50">
              <div className="flex pb-3 md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
                <Input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Full Name"
                />
                <Input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="Email"
                />
              </div>
              <Textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                className="z-10"
                placeholder="Type your message here"
              />
              <Button
                className="mt-3 px-10 rounded-full"
                variant="secondary"
                type="submit"
              >
                Send
              </Button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
