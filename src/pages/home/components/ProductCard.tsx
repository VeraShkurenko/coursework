import type { ProductType } from '../../../entities/product/model/ProductType';
import Label from '../../../features/label/Label';
import { LabelTypes } from '../../../features/label/types/LabelTypes';
import SiteButton from '../../../features/buttons/SiteButton';
import { ButtonTypes } from '../../../features/buttons/types/ButtonTypes';
import './ui/productCard.css';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }: { product: ProductType }) {
  const labelMap = {
    DEAL: LabelTypes.Black,
    HIT: LabelTypes.Black,
    NEW: LabelTypes.Purple,
    SALE: LabelTypes.Red,
  };

  function addToCart(product: ProductType): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="col h-100 mb-4">
      <div className="product-card h-100 d-flex flex-column border-0 bg-transparent product-card-hoverable">
        
        <Link to={`/product/${product.id}`} className="text-decoration-none"> 
        <div className="position-relative bg-light d-flex align-items-center justify-content-center p-4 mb-3" 
             style={{ height: '350px' }}>
          
          {product.label && (
            <div className="position-absolute top-0 start-0 m-0 z-1">
              <Label
                labelType={labelMap[product.label as keyof typeof labelMap] || LabelTypes.Black}
                text={product.label}
              />
            </div>
          )}

          <img 
            src={product.img} 
            className="img-fluid object-fit-contain h-100" 
            alt={product.title} 
            style={{ mixBlendMode: 'multiply' }} 
          />
        </div>
</Link>

        <div className="mt-auto d-flex flex-column">
          <p className="text-muted mb-1" style={{ fontSize: '13px' }}>{product.type}</p>
          <h6 className="fw-bold mb-1" style={{ fontSize: '15px', lineHeight: '1.2' }}>
            {product.title}
          </h6>
          
          <div className="d-flex align-items-center gap-1 mb-2 text-warning" style={{ fontSize: '11px' }}>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>

          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="fw-bold fs-5 text-danger">{product.price}</span>
          </div>

          <div className="buy-button-wrapper">
<SiteButton 
  buttonType={ButtonTypes.Black} 
  text="Додати у кошик"
  action={() => addToCart(product)} 
/>
          </div>
        </div>
      </div>
    </div>
  );
}