import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  getGifs(category);

  return (
    <>
      <h2>{category}</h2>
    </>
  );
};
