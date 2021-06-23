import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import WelcomeBlock from "./WelcomeBlock";

import ProductCard from "./ProductCard";

import Button from "./Button";

import logo from "./download.svg";

const products = [
  {
    picture: logo,
    description: "Kit 50 Cabides De Veludo Ultra Fino Antideslizante Bege",
    price: 165.9,
    discount: 0,
    installments: 12,
    freeShipping: true,
  },
  {
    picture:
      "https://http2.mlstatic.com/D_Q_NP_2X_848743-MLB42260393457_062020-AB.webp",
    description: "80 Cabides Veludo Slim Finos Antideslizantes Cinza Begônia",
    price: 249,
    discount: 28,
    installments: 12,
    freeShipping: true,
  },
];

function App() {
  return (
    <div className="container mt-5">
      <WelcomeBlock />

      <Button type="button" danger>
        <i className="fas fa-download"></i>
        <span>Baixar</span>
      </Button>

      {products.map((productObj) => {
        return (
          <ProductCard
            picture={productObj.picture}
            description={productObj.description}
            price={productObj.price}
            discount={productObj.discount}
            installments={productObj.installments}
            freeShipping={productObj.freeShipping}
          />
        );
      })}
    </div>
  );
}

export default App;
