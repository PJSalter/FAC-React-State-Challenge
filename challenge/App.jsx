import dishes from "./data.js";
import FilterCategory from "./FilterCategory.jsx";
import FilterPrice from "./FilterPrice.jsx";
import { useState } from "react";

// Get all unique categories from the array of dishes
// const categories = [...new Set(dishes.map((dish) => dish.category))];

function App() {
  const [category, setCategory] = useState("all");
  return (
    <main>
      <section aria-label="filters">
        <div className="sticky">
          <h1>Burger Place</h1>
          <form>
            <h2>Filter dishes</h2>
            <FilterPrice />
            <FilterCategory category={category} setCategory={setCategory} />
          </form>
        </div>
      </section>
      <section aria-label="dishes">
        <ul className="grid">
          {dishes.map((dish) => (
            <li key={dish.id} className="card">
              <h3>{dish.name}</h3>
              {dish.description && <p>{dish.description}</p>}
              <div>£{dish.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
