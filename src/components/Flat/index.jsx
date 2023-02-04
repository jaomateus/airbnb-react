import "./Flat.scss";

const Flat = ({ imageUrl, price, name }) => {
  return (
    <div className="flat">
      <img src={imageUrl} alt="The flat" className="flat-picture" />
      <div className="flat-title">
        <strong>{price}€ </strong> - {name}
      </div>
    </div>
  );
};

export default Flat;
 