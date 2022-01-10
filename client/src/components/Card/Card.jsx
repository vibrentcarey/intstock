import "../../components/Card/Card.scss";

// Card Component
const Card = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

export default Card;
