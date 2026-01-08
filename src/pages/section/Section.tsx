import { Link, useParams } from 'react-router-dom';
import { SectionDao } from '../../entities/section/api/SectionDao';
import ProductCard from '../home/components/ProductCard';
import type { SectionType } from '../../entities/section/model/SectionType';
import { useRef } from 'react';
import './ui/section.css';

interface SectionProps {
  section?: SectionType;
}

export default function Section({ section: propsSection }: SectionProps) {
  const { slug } = useParams<{ slug: string }>();
  const scrollRef = useRef<HTMLDivElement>(null); 
  
  const currentSection = propsSection || (slug ? SectionDao.getSectionById(slug) : undefined);

  if (!currentSection) {
    return (
      <div className="container my-5 text-center">
        <h3 className="text-muted">Категорію не знайдено</h3>
        <Link to="/" className="btn btn-outline-dark mt-3">Повернутися на головну</Link>
      </div>
    );
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="container my-5">
      {slug && (
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none text-muted">Головна</Link>
            </li>
            <li className="breadcrumb-item active text-dark fw-bold text-uppercase">
              {currentSection.title}
            </li>
          </ol>
        </nav>
      )}

      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h2 className="h4 fw-normal text-uppercase mb-0">{currentSection.title}</h2>
        
        {slug ? (
          <span className="text-muted small">{currentSection.items.length} товарів</span>
        ) : (
          <div className="d-flex gap-3">
            <i 
              className="bi bi-chevron-left" 
              style={{ cursor: 'pointer', fontSize: '1.2rem' }}
              onClick={() => scroll('left')}
            ></i>
            <i 
              className="bi bi-chevron-right" 
              style={{ cursor: 'pointer', fontSize: '1.2rem' }}
              onClick={() => scroll('right')}
            ></i>
          </div>
        )}
      </div>

      {!slug ? (
        <div className="product-slider-wrapper">
          <div className="product-slider-container" ref={scrollRef}>
            {currentSection.items.map(product => (
              <div key={product.id} className="product-slider-item">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      ) : (

        <div className="row row-cols-2 row-cols-md-4 g-4">
          {currentSection.items.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}