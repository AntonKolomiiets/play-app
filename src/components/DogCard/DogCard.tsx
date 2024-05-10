import DogPictureContainer from "../DogPictureContainer/DogPictureContainer";
import DogPictureExpandedContainer from "../DogPictureExpandedContainer/DogPictureExpandedContainer";
import { useState } from "react";

export default function DogPicture({ imageUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleDetails}>
      <DogPictureContainer imageUrl={imageUrl} />
      {isOpen && <DogPictureExpandedContainer imageUrl={imageUrl} />}
    </div>
  );
}
