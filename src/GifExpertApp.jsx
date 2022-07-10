import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Test", "Test2"]);

  const onAddCategory = () => {
    setCategories(["Push", ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <button onClick={onAddCategory}>Add</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
