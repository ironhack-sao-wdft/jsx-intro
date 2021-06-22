function ProductCard(props) {
  const discountedPrice = props.price - props.price * (props.discount / 100);

  const pricePerInstallment = discountedPrice / props.installments;

  return (
    <div className="card">
      <img
        src={props.picture}
        className="card-img-top"
        alt={props.description}
      />
      <div className="card-body">
        <h5 className="card-title">
          {discountedPrice.toLocaleString("pt-br", {
            currency: "BRL",
            style: "currency",
          })}
        </h5>
        <span>{props.discount}% OFF</span>
        <p className="card-text">
          {props.installments}x
          {pricePerInstallment.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
          sem juros
        </p>
        {props.freeShipping ? <span>Frete grátis</span> : null}
      </div>
    </div>
  );
}

export default ProductCard;
