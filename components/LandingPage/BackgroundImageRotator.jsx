"use client";
import Image from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useEffect, useState, useRef } from "react";

const BackgroundImageRotator = () => {
  const [containerHeight, setContainerHeight] = useState("100vh");

  useEffect(() => {
    // Set the height to match viewport on mount and resize
    const updateHeight = () => {
      setContainerHeight(`${window.innerHeight}px`);
    };

    updateHeight(); // Initial set
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Sample media array with both images and videos
  const media = [
    {
      id: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1533416784636-2b0ccfea6b97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1549927681-0b673b8243ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1501066927591-314112b5888e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      imgUrl:
        "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      imgUrl:
        "https://images.unsplash.com/photo-1526069824293-406685e85766?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      imgUrl:
        "https://www.byd.com/content/dam/byd-site/en-qa/product/song/song/banner-key-vision-adjust-pc.jpg",
    },
    {
      id: 7,
      imgUrl:
        "https://i02.appmifile.com/954_operatorx_operatorx_uploadTiptapImage/07/04/2024/385346190cdf91cfc5e012f5f1e4e233.png",
    },
  ];

  // Custom CSS for slide container
  const slideContainerStyle = {
    height: containerHeight,
    width: "100%",
  };

  return (
    <div className="absolute inset-0 z-0" style={{ height: containerHeight }}>
      <Fade
        easing="linear"
        duration={5000}
        transitionDuration={1000}
        arrows={false}
        indicators={false}
        pauseOnHover={true}
        infinite={true}
      >
        {media.map((item, index) => (
          <div
            key={item.id}
            className="each-slide-effect"
            style={slideContainerStyle}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.imgUrl}
                alt={`Background ${index}`}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-black/60" />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default BackgroundImageRotator;
