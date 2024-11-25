import './Button.css';

const Button = ({ label, callback }) => {
  return (
    <button
      className="button-detail"
      onClick={() => callback()}
    >
      {label}
    </button>
  );
};

export default Button;
