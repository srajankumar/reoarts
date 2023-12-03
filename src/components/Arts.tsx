"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1e1e1e" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#1e1e1e" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1e1e1e" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

interface ImageData {
  src: string;
  alt: string;
}

export function Arts() {
  const images: ImageData[] = [
    { src: "/arts/one.jpeg", alt: "Image 1" },
    { src: "/arts/two.jpg", alt: "Image 2" },
    { src: "/arts/three.jpg", alt: "Image 3" },
    { src: "/arts/four.jpg", alt: "Image 4" },
    { src: "/arts/five.jpg", alt: "Image 5" },
    { src: "/arts/six.jpg", alt: "Image 6" },
    { src: "/arts/seven.jpg", alt: "Image 7" },
    { src: "/arts/eight.jpeg", alt: "Image 8" },
    { src: "/arts/nine.jpeg", alt: "Image 9" },
    { src: "/arts/ten.jpeg", alt: "Image 10" },
    { src: "/arts/eleven.jpg", alt: "Image 11" },
    { src: "/arts/twelve.jpeg", alt: "Image 12" },
    { src: "/arts/thirteen.jpg", alt: "Image 13" },
    { src: "/arts/fourteen.jpg", alt: "Image 14" },
    { src: "/arts/fifteen.jpeg", alt: "Image 15" },
    { src: "/arts/sixteen.jpg", alt: "Image 16" },
    { src: "/arts/seventeen.jpeg", alt: "Image 17" },
    { src: "/arts/eighteen.jpg", alt: "Image 18" },
    { src: "/arts/nineteen.jpg", alt: "Image 19" },
    { src: "/arts/twenty.jpg", alt: "Image 20" },
    { src: "/arts/twenty_one.jpeg", alt: "Image 21" },
    { src: "/arts/twenty_two.jpeg", alt: "Image 22" },
    { src: "/arts/twenty_three.jpg", alt: "Image 23" },
    { src: "/arts/twenty_four.jpg", alt: "Image 24" },
  ];
  const [selectedImage, setSelectedImage] = useState<number | null>(
    null as number | null
  );

  const openImageDialog = (index: number) => {
    setSelectedImage(index);
  };

  const closeImageDialog = () => {
    setSelectedImage(null);
  };

  const selectedImageSrc = (images[selectedImage ?? 0] || {}).src;
  const selectedImageAlt = (images[selectedImage ?? 0] || {}).alt;

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2">
      {images.map((image, index) => (
        <AlertDialog key={index}>
          <AlertDialogTrigger asChild>
            <AspectRatio ratio={4 / 5} className="m-5">
              <div
                role="button"
                tabIndex={0}
                onClick={() => openImageDialog(index)}
                onKeyDown={() => openImageDialog(index)}
              >
                <Image
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475)
                  )}`}
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  className="rounded-xl h-40 w-full shadow-xl md:hover:scale-[102%] transition duration-300 object-cover"
                />
              </div>
            </AspectRatio>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogDescription>
              <AspectRatio ratio={4 / 5}>
                <Image
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475)
                  )}`}
                  src={selectedImageSrc}
                  alt={selectedImageAlt}
                  layout="fill"
                  className="rounded-md object-contain"
                />
              </AspectRatio>
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={closeImageDialog}>
                Close
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ))}
    </div>
  );
}
