function Input(props) {
  let inputElement = null;

  switch (props.proptype) {
    case "text":
      inputElement = <input type='text' name={props.name} id='' />;
      break;

    default:
      break;
  }

  return inputElement;
}

export default Input;
