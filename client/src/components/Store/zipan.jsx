import React from "react";

const StyledVideoComponent = () => {
  const videoStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    padding: "20px",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 1000,
  };

  const iframeStyles = {
    width: "45%", // Adjust width to make the videos smaller
    height: "auto",
    aspectRatio: "9/16", // Keeps the aspect ratio of 1080x1920
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const wrapperStyles = {
    paddingTop: "177.78%", // Aspect ratio (9:16)
    position: "relative",
  };

  return (
    <div style={videoStyles}>
        <iframe
          src="https://player.vimeo.com/video/1034228161?h=1c0608e80d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="ديوان ذيبان غنام الحميداني"
          style={iframeStyles}
        ></iframe>
    </div>
  );
};

export default StyledVideoComponent;