"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref) as boolean;

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      className="min-h-[100dvh] md:p-5 p-3 flex justify-center flex-col"
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
      <motion.h1
        className="text-secondary text-6xl md:text-8xl font-extrabold"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        REO ARTS
      </motion.h1>

      <motion.h1
        className="pt-3 md:w-3/4 text-white"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Explore an exquisite collection featuring stunning artistic creations,
        capturing the essence of creativity and passion in every piece.
      </motion.h1>

      <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Link href="#contact">
          <Button
            variant="secondary"
            className="rounded-full w-fit px-10 font-bold mt-5"
          >
            Contact
          </Button>
        </Link>
      </motion.h1>
    </motion.div>
  );
};

export default Hero;
