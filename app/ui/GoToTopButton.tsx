import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

// Component to handle "Go To Top" functionality
const GoToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  // Scroll event handler to toggle visibility of the "Go To Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll the page to the top
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <IconButton
          onClick={scrollToTop}
          sx={[
            {
              position: "fixed",
            },
            styles.goToTopBtn,
          ]}
        >
          <ArrowUpward />
        </IconButton>
      )}
    </>
  );
};

const styles = {
  goToTopBtn: {
    bottom: "20px",
    right: "5%",
    background: "linear-gradient(45deg, #ff4081, #00b0ff)", // Gradient background
    color: "#fff",
    borderRadius: "50%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    transition: "transform 0.3s ease, background 0.3s ease", // Smooth transition for hover effect
    "&:hover": {
      background: "linear-gradient(45deg, #00b0ff, #ff4081)", // Reverse gradient on hover
      transform: "scale(1.1)", // Slightly enlarge on hover
    },
  },
};

export default GoToTopButton;
