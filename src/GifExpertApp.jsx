import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Test", "Test2"]);

  const onAddCategory = () => {
    setCategories(["Push", ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
