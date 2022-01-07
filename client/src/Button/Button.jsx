import "../Button/Button.scss";

// Button Component
function Button(props) {
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
    <button type="submit" className={btnDesign} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Button;
