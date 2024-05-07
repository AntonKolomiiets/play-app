import "./Dogs.css";
import { BreedProvider, NumberProvider } from "../../contexts/DogsContext.tsx";
import BreedSelector from "../../components/BreedSelector/BreedSelector.tsx";
import NumberSelector from "../../components/BreedSelector/NumberSelector/NumberSelector.tsx";
import ImageContainer from "../../components/ImageContainer/ImageContainer.tsx";

// in __name__ == __main__
export default function Dogs() {
  return (
    <div className="Dogs">
      <div>
        <BreedProvider>
          <BreedSelector />
          <NumberProvider>
            <NumberSelector />
            <ImageContainer />
          </NumberProvider>
        </BreedProvider>
      </div>
    </div>
  );
}
