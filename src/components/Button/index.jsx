const Button = ({
  variant,
  content,
  link}
) => {

    const styles = {
        primary: "bg-highlight hover:bg-button-text border-transparent text-button-text hover:text-highlight font-bold",
        secondary: "bg-transparent border-button-border text-main-text font-semibold"
    }

  return (
    <div>
      <a
        href={link}
        className={`inline-block px-6 py-3.5 border border-solid ${styles[variant]} rounded-full hover:scale-105 transition-all duration-300 `}
      >
        {content}
      </a>
    </div>
  );
};

export default Button;
