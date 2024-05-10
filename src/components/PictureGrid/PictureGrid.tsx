import "./PictureGrid.css";
import { useInfiniteQuery } from "react-query";
import { useRef, useEffect } from "react";
import DogPicture from "../DogCard/DogCard";

interface ImageResponse {
  message: string;
  status: string;
}

const DOG_API = "https://dog.ceo";

const fetchImageUrl = async () => {
  const res = await fetch(DOG_API + "/api/breeds/image/random");
  const data: ImageResponse = await res.json();
  return data.message;
};

export default function PictureGrid() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery<string, Error>("dogImages", fetchImageUrl, {
    getNextPageParam: (pages) => pages.length + 1,
  });

  const observer = useRef<IntersectionObserver>(null);
  const lastElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading || isFetchingNextPage) return;

    const currentObserver = observer.current;
    if (currentObserver) currentObserver.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    const currentElement = lastElementRef.current;
    if (currentElement) {
      observer.current.observe(currentElement);
    }

    return () => {
      if (currentObserver) currentObserver.disconnect();
    };
  }, [isLoading, isFetchingNextPage, fetchNextPage, hasNextPage]);

  if (isLoading)
    return <img src="src/assets/Spinner@1x-1.0s-200px-200px-2.svg" />;
  if (isError) return <p>Error loading images</p>;

  return (
    <div className="cardCont">
      {data?.pages.map((url: string, index) => (
        <DogPicture key={index} imageUrl={url} />
      ))}
      <div
        ref={lastElementRef}
        style={{ height: "1px", visibility: "hidden" }}
      ></div>
      {isFetchingNextPage && (
        <img src="src/assets/Spinner@1x-1.0s-200px-200px-2.svg" />
      )}
    </div>
  );
}
