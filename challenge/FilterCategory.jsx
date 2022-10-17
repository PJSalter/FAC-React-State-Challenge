const categories = [
  "all",
  "burger",
  "hot dog",
  "sandwich",
  "fries",
  "topping",
  "drink",
  "extra",
];

export default function FilterCategory({ category, setCategory }) {
  return (
    <fieldset>
      <legend>Category</legend>
      {categories.map((c) => (
        <label htmlFor={c} key={c}>
          <input
            type="radio"
            name="categories"
            id={c}
            value={c}
            checked={c === category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {c}
        </label>
      ))}
    </fieldset>
  );
}
