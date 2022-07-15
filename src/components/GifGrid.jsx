export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${
      import.meta.env.VITE_SOME_KEY
    }`;

    const resp = await fetch(url);
    console.log(resp);
  };

  getGifs();

  return (
    <>
      <h2>{category}</h2>
    </>
  );
};
