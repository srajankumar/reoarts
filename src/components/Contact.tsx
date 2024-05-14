"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, useInView } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const emailServiceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
const emailTemplateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
const emailApiKey = process.env.NEXT_PUBLIC_API_KEY!;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const ref = React.useRef(null);
  const isInView = useInView(ref) as boolean;

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: +10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        toast("Email sent successfully!");
      } else {
        toast.error("Somethig went wrong! Please try again.");
        console.log(data.error || "Something went wrong");
      }

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Error! Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      className="relative justify-center xl:rounded-t-[20rem] lg:rounded-t-[15rem] md:rounded-t-[12rem] sm:rounded-t-[10rem] rounded-t-[7rem] flex bg-[#0d0d0d] min-h-[100dvh]"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <div className="absolute bottom-0 right-0 w-[24.9%] h-[34.9%] bg-white" />
      <div className="absolute bottom-0 right-0 w-[25%] h-[35%] bg-[#0d0d0d] rounded-br-full z-10" />
      <div className="flex tracking-wide px-8 md:px-10">
        <main className="max-w-6xl py-10">
          <div className="min-h-screen flex justify-center flex-col">
            <motion.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="text-secondary text-4xl font-extrabold"
            >
              CONTACT
            </motion.h1>

            <motion.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="py-3 md:w-3/4 text-white"
            >
              Gift a touch of art! For personalized portraits or inquiries about
              my work, reach out to me. Let&apos;s chat about bringing beauty
              into your space!
            </motion.h1>

            <form onSubmit={handleSubmit} className="z-40 mt-2">
              <motion.h1
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="flex pb-3 md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3"
              >
                <Input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Full Name"
                  disabled={isLoading}
                />
                <Input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="Email"
                  disabled={isLoading}
                />
              </motion.h1>
              <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS}>
                <Textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  className="z-10"
                  placeholder="Type your message here"
                  disabled={isLoading}
                />
              </motion.h1>
              <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS}>
                <Button
                  className="mt-3 px-10 rounded-full"
                  variant="secondary"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 animate-spin"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                  )}
                  Send
                </Button>
              </motion.h1>
            </form>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default Contact;
