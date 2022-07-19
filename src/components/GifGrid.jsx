import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2>Results: {category}</h2>
      {!isLoading ? (
        <div className="card-grid">
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};
