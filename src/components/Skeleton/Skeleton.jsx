import React from "react";
import styles from "../Skeleton/Skeleton.module.scss";
const Skeleton = ({
  width = "100%",
  height,
  className,
  animationDirection,
}) => {
  const skeletonStyle = {
    width,
    height,
    backgroundColor: "#f2f2f2",
    backgroundImage: `linear-gradient(to ${animationDirection}, #f2f2f2 0%, #d9d9d9 50%, #f2f2f2 100%)`,
    backgroundSize: "200% 100%",
    animation: "skeleton-loading 1.5s infinite linear",
  };
  const animationKeyframes = `
    @keyframes skeleton-loading {
      0% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;
  return (
    <>
      <style>{animationKeyframes}</style>
      <div
        className={`${styles.skelediv} ${className}`}
        style={skeletonStyle}
      />
    </>
  );
};

export default Skeleton;
