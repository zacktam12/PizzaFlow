import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const Base =
    "rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-700 hover:bg-yellow-300 focus:inline-block focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed  ";

  const Styles = {
    primary: Base + " px-4 py-3 md:px-6 md:py-4",
    small: Base + " px-4 py-2 md:px-5 sm:py-2.5 ",
  };

  if (to) {
    return (
      <Link className={Styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button className={Styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
