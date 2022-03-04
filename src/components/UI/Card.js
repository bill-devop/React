import "./Card.css";

const Card = (props) => {
  // using the props key className values inside the using component and any of its css.
  const classes = "card " + props.className;

  // using the reserve name 'children' in order to make this an enclosing div in other components
  return <div className={classes}>{props.children}</div>;
}

export default Card;
