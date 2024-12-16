// Imports
import CustomersFeedback from "../CustomersFeedback";
import Features from "../Features";
import Slider from "../Slider";
import "./index.css";
// React Component
const HomePage = ({ basket, onSetBasket, onSetSingleItem }) => {
  return (
    <>
      {/* wellcome picture  */}
      <div className="heros bg-primary text-white text-center py-5 container-fluid"></div>
      <div className="container-fluid bg-light">
        {/* features section  */}
        <Features />
        {/* trending products section  */}
        <Slider
          basket={basket}
          onSetBasket={onSetBasket}
          onSetSingleItem={onSetSingleItem}
        />
        {/* Customers Feddbacks section  */}
        <CustomersFeedback />
      </div>
    </>
  );
};
export default HomePage;
