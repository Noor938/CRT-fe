const Button = ({ children, className = "", ...rest }) => {
  return (
    <button
      type="button"
      style={{
        border: "none",
        borderRadius: "12px",
        fontSize: "16px",
        textAlign: "center",
        padding: "12px 21px",
        color: "white",
        background: "linear-gradient(145deg, rgb(20, 74, 148) 0%, rgb(21, 46, 81) 57%, rgb(1, 2, 4) 100%)",
        transition: "opacity 0.3s ease",
        cursor: "pointer",
      }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
