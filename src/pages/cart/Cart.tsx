import { useContext } from 'react';
import { AppContext } from '../../features/app_context/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import SiteButton from '../../features/buttons/SiteButton';
import { ButtonTypes } from '../../features/buttons/types/ButtonTypes';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart, showModal } = useContext(AppContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/\s/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  const handleClearCart = () => {
    showModal({
      title: "Очистити кошик?",
      message: "Ви впевнені, що хочете видалити всі товари з кошика? Цю дію неможливо скасувати.",
      confirmText: "Так, очистити",
      cancelText: "Назад",
      onConfirm: () => clearCart()
    });
  };

const handleCheckout = () => {
  showModal({
    title: "Підтвердження замовлення",
    message: `Сума до сплати: ${totalPrice} ₴. Підтвердити оформлення?`,
    confirmText: "Підтверджую",
    onConfirm: () => {
      const orderId = Math.floor(Math.random() * 90000) + 10000;
      clearCart();
      navigate(`/thank-you?order=${orderId}`);
    }
  });
};
  
  if (cart.length === 0) {
    return (
      <div className="container my-5 text-center p-5">
        <i className="bi bi-bag-x display-1 text-muted"></i>
        <h2 className="mt-4 fw-bold text-uppercase">Ваш кошик порожній</h2>
        <p className="text-muted">Але це ніколи не пізно виправити!</p>
        <div className="d-flex justify-content-center mt-4">
            <div style={{ maxWidth: '300px', width: '100%' }}>
                <SiteButton 
                    buttonType={ButtonTypes.Black} 
                    text="Перейти до покупок" 
                    action={() => navigate('/')} 
                />
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-uppercase mb-4 border-bottom pb-3">Кошик ({cart.length})</h2>
      <div className="row mt-4">
        <div className="col-md-8">
          {cart.map(item => (
            <div key={item.id} className="d-flex align-items-center border-bottom py-4">
              <img src={item.img} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
              <div className="ms-4 flex-grow-1">
                <h6 className="mb-1 fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>{item.title}</h6>
                <p className="text-muted small mb-3">{item.type}</p>
                <div className="d-flex align-items-center gap-4">
                  <span className="h5 mb-0 fw-bold">{item.price}</span>
                  
                  <div className="d-flex align-items-center border border-dark p-1">
                    <button 
                      className="btn btn-sm border-0 px-3 fw-bold" 
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity <= 1}
                    >
                      —
                    </button>
                    <span className="px-2 fw-bold" style={{ minWidth: '30px', textAlign: 'center' }}>
                        {item.quantity}
                    </span>
                    <button 
                      className="btn btn-sm border-0 px-3 fw-bold" 
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button 
                className="btn btn-link text-dark p-2" 
                onClick={() => removeFromCart(item.id)}
                title="Видалити"
              >
                <i className="bi bi-x-lg fs-5"></i>
              </button>
            </div>
          ))}
          
          <button 
            className="btn btn-link text-muted mt-4 p-0 text-decoration-none small text-uppercase fw-bold" 
            onClick={handleClearCart}
          >
            <i className="bi bi-trash3 me-2"></i> Очистити кошик
          </button>
        </div>

        <div className="col-md-4">
          <div className="p-4 border border-dark rounded-0 bg-white">
            <h5 className="fw-bold text-uppercase mb-4" style={{ letterSpacing: '1px' }}>Підсумок</h5>
            <div className="d-flex justify-content-between mt-3">
              <span className="text-muted">Товари ({cart.length})</span>
              <span className="fw-bold">{totalPrice} ₴</span>
            </div>
            <div className="d-flex justify-content-between text-success mt-2">
              <span className="small">Доставка</span>
              <span className="small fw-bold text-uppercase">Безкоштовно</span>
            </div>
            <hr className="my-4" />
            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="h5 fw-bold mb-0 text-uppercase">Разом</span>
              <span className="h4 text-danger fw-bold mb-0">{totalPrice} ₴</span>
            </div>
            <div className="full-width-btn-wrapper mb-4">
            <SiteButton 
              buttonType={ButtonTypes.Black} 
              text="Оформити замовлення" 
              action={handleCheckout}
            /></div>
          </div>
        </div>
      </div>
    </div>
  );
}