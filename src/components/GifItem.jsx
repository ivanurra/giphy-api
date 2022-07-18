import { Image } from "@nextui-org/react";

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <Image src={url} alt={title}/>
      <p>{title}</p>
    </div>
  );
};
