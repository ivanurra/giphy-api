import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h2>{category}</h2>
    </>
  );
};
