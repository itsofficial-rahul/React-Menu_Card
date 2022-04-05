import { useState } from "react";
import "./App.css";
import Category from "./Category";
import menu from "./Items";
import Menu from "./Menu";
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
function App() {
  const [items, setitems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);
  console.log(items);
  function filterItems(category) {
    if (category === "all") {
      setitems(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category);
    setitems(newItems);
  }
  function deletItems(dleItems) {
    const newItems = items.filter((item) => item.id != dleItems);
    setitems(newItems);
  }
  return (
    <div className="App">
      <Category category={categories} filterItems={filterItems} />
      <Menu items={items} deletItems={deletItems} />
    </div>
  );
}

export default App;
