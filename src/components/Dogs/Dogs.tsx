import "./Dogs.css";
import GetBreed from "./GetBreed/GetBreed.tsx";
import GetNumber from "./GetNumber/GetNumber.tsx";
import DisplayImage from "./DisplayImage/DisplayImage.tsx";
import { BreedProvider, NumberProvider } from "./DogsComntext.tsx";

// in __name__ == __main__
export default function Dogs() {
  return (
    <div className="Dogs">
      <div>
        <BreedProvider>
          <GetBreed />
          <NumberProvider>
            <GetNumber />
            <DisplayImage />
          </NumberProvider>
        </BreedProvider>
      </div>
    </div>
  );
}
