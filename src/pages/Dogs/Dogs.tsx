import "./Dogs.css";
import { BreedProvider, NumberProvider } from "../../contexts/DogsContext.tsx";
import BreedSelector from "../../components/unused/BreedSelector/BreedSelector.tsx";
import NumberSelector from "../../components/unused/NumberSelector/NumberSelector.tsx";
import ImageContainer from "../../components/unused/ImageContainer/ImageContainer.tsx";
import DogPicture from "../../components/DogCard/DogCard.tsx";
import PictureGrid from "../../components/PictureGrid/PictureGrid.tsx";

// in __name__ == __main__
export default function Dogs() {
  return (
    <div className="pagedisplay">
      <PictureGrid />
    </div>
  );
}
