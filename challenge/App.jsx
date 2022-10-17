import dishes from "./data.js";
import FilterPrice from "./FilterPrice.jsx";

// Get all unique categories from the array of dishes
const categories = [...new Set(dishes.map((dish) => dish.category))];

function App() {
  return (
    <main>
      <section aria-label="filters">
        <div className="sticky">
          <h1>Burger Place</h1>
          <form>
            <h2>Filter dishes</h2>
            <FilterPrice />
            <fieldset>
              <legend>Category</legend>
              <label htmlFor="all">
                <input type="radio" name="categories" id="all" value="all" />
                all
              </label>
              {categories.map((c) => (
                <label htmlFor={c} key={c}>
                  <input type="radio" name="categories" id={c} value={c} />
                  {c}
                </label>
              ))}
            </fieldset>
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
