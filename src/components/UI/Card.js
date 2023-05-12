/**
 * This is a custom composition component which is used to wrap the main expense item 
 * in the project 
 * Here we to have the custom component be sent to one another we need to use the children 
 * prop for all the children custom components to show up and to import their CSS structure
 * we need to use props.className and add to our custom class and then push 
 */
import './Card.css';

const Card = (props) => {
  return <div className={'card ' + props.className}>{props.children}</div>;
};

export default Card;
