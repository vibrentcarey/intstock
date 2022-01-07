import "../Button/Button.scss";

// Button Component
function Button(props) {
  // The props.type="edit" button is differently implemented.
  // The other buttons are normal HTML buttons.

  let btnDesign;
  switch (props.type) {
    case "primary":
      btnDesign = "button__primary";
      break;
    case "secondary":
      btnDesign = "button__secondary";
      break;
    case "delete":
      btnDesign = "button__delete";
      break;
    default:
      btnDesign = "button__primary";
      break;
  }

  return (
    <>
      {props.type === "edit" ? (
        <div className="container" onClick={props.onClick}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
              fill="#FFF"
            />
          </svg>
          <span className="container__text">Edit</span>
        </div>
      ) : (
        <button type="button" className={btnDesign} onClick={props.onClick}>
          <span>{props.value}</span>
        </button>
      )}
    </>
  );
}

export default Button;
