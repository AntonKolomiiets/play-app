import { ChangeEvent } from "react";
import { useQuery } from "react-query";
import { useBreed } from "../context";

interface DogApiResponse {
  message: { [key: string]: string[] };
  status: string;
}

export default function GetBreed() {
  const fetchBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json() as Promise<DogApiResponse>; // Ensure the response matches DogApiResponse structure
  };

  const { data, isError, error, isLoading } = useQuery<DogApiResponse, Error>(
    ["breeds"],
    fetchBreeds
  );
  const { selectedBreed, setSelectedBreed } = useBreed();

  const handleBreedChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const breed = event.target.value;
    setSelectedBreed(breed);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;


  return (
    <div>
      <h1>Select breed</h1>
      <select value={selectedBreed} onChange={handleBreedChange}>
        <option value="">Select a breed</option>
        {data &&
          Object.entries(data.message).map(([breed, subBreeds]) =>
            subBreeds.length === 0 ? (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ) : (
              subBreeds.map((subBreed) => (
                <option
                  key={`${breed}-${subBreed}`}
                  value={`${breed}-${subBreed}`}
                >
                  {breed} {subBreed}
                </option>
              ))
            )
          )}
      </select>
    </div>
  );
}