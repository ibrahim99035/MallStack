import React from "react";

const StyledVideoComponent = () => {
  const videoStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    padding: "20px",
    flexWrap: "wrap", 
    position: "relative",
    zIndex: 1000
  };

  const iframeStyles = {
    width: "45%", // Adjust width to make the videos smaller
    height: "auto",
    aspectRatio: "9/16", // Keeps the aspect ratio of 1080x1920
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={videoStyles}>
      <iframe
        src="https://player.vimeo.com/video/1033450793?h=cddc697d72&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        style={iframeStyles}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="Green Minimalist Frog Mushroom Phone Wallpaper (1)"
      ></iframe>
      <iframe
        src="https://player.vimeo.com/video/1033450195?h=067f3fc2e5&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        style={iframeStyles}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="Green Minimalist Frog Mushroom Phone Wallpaper (2)"
      ></iframe>
    </div>
  );
};

export default StyledVideoComponent;
