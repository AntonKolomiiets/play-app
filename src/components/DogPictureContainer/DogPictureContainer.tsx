import React from "react";
import "./DogPictureContainer.css";

// Define an interface for the component props
interface DogPictureContainerProps {
  imageUrl: string;
}

const DogPictureContainer: React.FC<DogPictureContainerProps> = ({
  imageUrl,
}) => {
  return (
    <div className="dpc_main">
      <img src={imageUrl} alt="Dog" className="dpc_image" />
    </div>
  );
};

export default DogPictureContainer;
