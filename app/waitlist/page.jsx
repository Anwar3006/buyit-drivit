"use client";
import React, { useEffect } from "react";

const WaitlistPage = () => {
  // Disable scrolling on the main document
  useEffect(() => {
    // Save the original overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Cleanup function to restore original overflow style when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <iframe
        className="w-full h-full"
        src="https://buyit-drivit-waitlist.created.app"
        title="Waiting List Landing Page"
        frameBorder="0"
        scrolling="yes"
      ></iframe>
    </div>
  );
};

export default WaitlistPage;
