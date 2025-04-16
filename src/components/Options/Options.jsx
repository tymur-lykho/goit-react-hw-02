import css from "./Options.module.css";

export default function Options({ options, updateFunction, totalFeedback }) {
  return (
    <ul className={css.options}>
      {options.map((option) => {
        return (
          <li key={option}>
            <button
              className={css.optionsBtn}
              onClick={() => updateFunction(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
      {totalFeedback > 0 && (
        <li>
          <button onClick={() => updateFunction("reset")}>Reset</button>
        </li>
      )}
    </ul>
  );
}
