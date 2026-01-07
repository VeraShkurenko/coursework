import { Link, useParams } from 'react-router-dom';
import { SectionDao } from '../../entities/section/api/SectionDao';
import ProductCard from '../home/components/ProductCard';
import type { SectionType } from '../../entities/section/model/SectionType';

interface SectionProps {
  section?: SectionType;
}

export default function Section({ section: propsSection }: SectionProps) {
  const { slug } = useParams<{ slug: string }>();
  
  // ВИПРАВЛЕННЯ: Використовуємо наш розумний метод пошуку
  // Якщо пропси пусті, питаємо DAO про секцію по ID (slug)
  const currentSection = propsSection || (slug ? SectionDao.getSectionById(slug) : undefined);

  if (!currentSection) {
    return (
      <div className="container my-5 text-center">
        <h3 className="text-muted">Категорію не знайдено</h3>
        <Link to="/" className="btn btn-outline-dark mt-3">Повернутися на головну</Link>
      </div>
    );
  }

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

      <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-3">
        <h2 className="h3 fw-normal text-uppercase mb-0">{currentSection.title}</h2>
        
        {slug ? (
          <span className="text-muted small">{currentSection.items.length} товарів</span>
        ) : (
          <div className="d-flex gap-3">
            <i className="bi bi-chevron-left text-muted" style={{ cursor: 'pointer' }}></i>
            <i className="bi bi-chevron-right" style={{ cursor: 'pointer' }}></i>
          </div>
        )}
      </div>

      <div className="row row-cols-2 row-cols-md-4 g-4">
        {currentSection.items.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}