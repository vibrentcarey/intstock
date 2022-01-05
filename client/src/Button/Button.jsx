// import AvatarLogo from "../../assets/images/Mohan-muruge.jpg";
import "../Button/Button.scss";
// import { Link } from "react-router-dom";

// Button OR Call to Action Component
function Button(props) {
  console.log("type=", props.type);
  console.log("value=", props.value);

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
    <button type="button" className={btnDesign} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Button;
