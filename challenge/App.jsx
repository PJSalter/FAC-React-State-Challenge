// import dishes from "./data.js";
import FilterCategory from "./FilterCategory.jsx";
import FilterPrice from "./FilterPrice.jsx";
import { useState } from "react";
import ListDishes from "./ListDishes.jsx";

// Get all unique categories from the array of dishes
// const categories = [...new Set(dishes.map((dish) => dish.category))];

function App() {
  const [max, setMax] = useState(9);
  const [category, setCategory] = useState("all");
  return (
    <main>
      <section aria-label="filters">
        <div className="sticky">
          <h1>Burger Place</h1>
          <form>
            <h2>Filter dishes</h2>
            <FilterPrice max={max} setMax={setMax} />
            <FilterCategory category={category} setCategory={setCategory} />
          </form>
        </div>
      </section>
      <section aria-label="dishes">
        <ListDishes max={max} category={category} />
      </section>
    </main>
  );
}

export default App;
