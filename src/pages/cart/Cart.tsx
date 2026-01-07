import { useContext } from "react";
import { AppContext } from "../../features/app_context/AppContext";
import { Link } from "react-router-dom";
import SiteButton from "../../features/buttons/SiteButton";
import { ButtonTypes } from "../../features/buttons/types/ButtonTypes";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(AppContext);

  // Підрахунок загальної суми
  const totalPrice = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/\s/g, ""));
    return sum + (price * item.quantity);
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="container my-5 text-center p-5">
        <i className="bi bi-bag-x display-1 text-muted"></i>
        <h2 className="mt-4 fw-bold">Ваш кошик порожній</h2>
        <p className="text-muted">Але це ніколи не пізно виправити!</p>
        <Link to="/" className="btn btn-dark rounded-0 px-5 py-3 mt-3">ПЕРЕЙТИ ДО ПОКУПОК</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-uppercase mb-5">Кошик ({cart.length})</h2>
      
      <div className="row g-5">
        <div className="col-lg-8">
          {cart.map(item => (
            <div key={item.id} className="d-flex align-items-center border-bottom pb-4 mb-4">
              <img src={item.img} alt={item.title} style={{ width: "100px", height: "120px", objectFit: "contain" }} className="bg-light p-2" />
              
              <div className="ms-4 flex-grow-1">
                <h5 className="fw-bold mb-1">{item.title}</h5>
                <p className="small text-muted mb-0">{item.type}</p>
                <div className="mt-2 fw-bold text-danger">{item.price} x {item.quantity}</div>
              </div>

              <button className="btn btn-link text-muted" onClick={() => removeFromCart(item.id)}>
                <i className="bi bi-trash fs-5"></i>
              </button>
            </div>
          ))}
          
          <button className="btn btn-link text-muted p-0 small text-decoration-none" onClick={clearCart}>
            Очистити кошик
          </button>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 bg-light p-4 rounded-0">
            <h4 className="fw-bold mb-4">РАЗОМ</h4>
            <div className="d-flex justify-content-between mb-2">
              <span>Сума замовлення</span>
              <span className="fw-bold">{totalPrice} ₴</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span>Доставка</span>
              <span className="text-success fw-bold">БЕЗКОШТОВНО</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-4 fs-4 fw-bold">
              <span>До сплати</span>
              <span className="text-danger">{totalPrice} ₴</span>
            </div>
            
            <SiteButton 
              buttonType={ButtonTypes.Black} 
              text="ОФОРМИТИ ЗАМОВЛЕННЯ" 
              action={() => alert("Замовлення оформлено!")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}