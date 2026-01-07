import { useParams, Link } from 'react-router-dom';
import { SectionDao } from '../../entities/section/api/SectionDao';
// Імпортуємо ваші фірмові компоненти
import SiteButton from '../../features/buttons/SiteButton';
import { ButtonTypes } from '../../features/buttons/types/ButtonTypes';
import "./ui/product.css";
import { useContext } from 'react';
import { AppContext } from '../../features/app_context/AppContext';

export default function Product() {
  const { slug } = useParams<{ slug: string }>();
  
  const product = SectionDao.getProductById(slug || "");

  if (!product) {
    return (
      <div className="container my-5 text-center">
        <h2 className="text-muted">Товар не знайдено</h2>
        <p>Ми не змогли знайти товар з ID: {slug}</p>
        <Link to="/" className="btn btn-outline-dark mt-3">Повернутися на головну</Link>
      </div>
    );
  }

const { addToCart } = useContext(AppContext);
// ...
const handleAddToCart = () => {
    addToCart(product);
    // Тут можна викликати toast "Додано в кошик!"
};

  return (
    <div className="container my-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb small">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none text-muted">Головна</Link>
          </li>
          <li className="breadcrumb-item active text-dark fw-bold text-uppercase">
            {product.title}
          </li>
        </ol>
      </nav>

      <div className="row g-5">
        <div className="col-md-6 text-center bg-light p-5 rounded">
          <img 
            src={product.img} 
            alt={product.title} 
            className="img-fluid object-fit-contain" 
            style={{ maxHeight: '500px', mixBlendMode: 'multiply' }} 
          />
        </div>

        <div className="col-md-6">
          <p className="text-muted text-uppercase small mb-1">{product.type}</p>
          <h1 className="fw-bold mb-3">{product.title}</h1>
          
          <div className="d-flex align-items-center gap-3 mb-4">
            <span className="display-6 fw-bold text-danger">{product.price}</span>
            {product.oldPrice && (
              <span className="text-muted text-decoration-line-through fs-4">
                {product.oldPrice}
              </span>
            )}
          </div>

          {/* Ваша фірмова кнопка */}
       <div className="full-width-btn-wrapper mb-4">
    <SiteButton 
      buttonType={ButtonTypes.Black} 
      text="Додати у кошик"
      action={handleAddToCart}
    />
  </div>

          <div className="border-top pt-4 mt-2">
            <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-check2-circle text-success"></i>
                <span className="small text-success fw-bold">Є в наявності</span>
            </div>
            <p className="small mb-2"><strong>Артикул:</strong> {1000 + Number(product.id)}</p>
            <p className="small text-muted">
                <i className="bi bi-truck me-2"></i>
                Безкоштовна доставка по всій Україні при замовленні від 500 ₴.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}