import React from "react";
import "./DogPictureExpandedContainer.css";

interface DogPictureContainerProps {
  imageUrl: string;
}

// Main
const DogPictureExpandedContainer: React.FC<DogPictureContainerProps> = ({
  imageUrl,
}) => {
  const getBreedName = (url: string): string => {
    const parts = url.split("/");
    return parts[4];
  };

  const breedName = getBreedName(imageUrl);

  return (
    <div className="dpec_background">
      <div className="dpec_container">
        <div>
          <p className="dpec_breedName">
            Breed: {breedName.replace(/-/g, " ")}
          </p>
        </div>
        <div className="dpec_picFormat">
          <img src={imageUrl} alt="Dog" className="dpec_image" />
        </div>
      </div>
    </div>
  );
};

export default DogPictureExpandedContainer;
