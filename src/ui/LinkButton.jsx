import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm sm:text-base md:text-lg text-primary-600 hover:text-primary-700 hover:underline font-medium transition-colors";
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <>
      <Link to={to} className={className}>
        {children}
      </Link>
    </>
  );
}

export default LinkButton;
