import SiteButton from "../buttons/SiteButton";
import { ButtonTypes } from "../buttons/types/ButtonTypes";
import Label from "../label/Label";
import { LabelTypes } from '../label/types/LabelTypes';
import { Outlet, Link } from "react-router-dom"; // Об'єднав імпорти роутера
import { useContext } from "react";
import { AppContext } from "../../features/app_context/AppContext";

export default function Layout() {
  const { cart, user } = useContext(AppContext);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const categories = [
    { name: "Парфумерія", slug: "parfumes" },
    { name: "Макіяж", slug: "makeup" },
    { name: "Обличчя", slug: "face" },
    { name: "Волосся", slug: "hair" },
    { name: "Тіло", slug: "body" },
    { name: "Здоров'я", slug: "health" },
    { name: "Аксесуари", slug: "accessories" },
    { name: "Fashion", slug: "fashion" },
    { name: "Чоловікам", slug: "men" }
  ];

  return (
    <>
      <header className="sticky-top bg-white">
        {/* Верхня частина хедера */}
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container d-flex align-items-center justify-content-between">
            {/* Пошук */}
            <form className="d-flex w-25" role="search">
              <div className="input-group">
                <input className="form-control border-end-0 rounded-0" type="search" placeholder="Пошук" aria-label="Search"/>
                <button className="btn btn-outline-secondary border-start-0 rounded-0" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>

            <Link 
              className="navbar-brand mx-auto fw-bold fs-2 text-uppercase text-dark text-decoration-none" 
              to="/" 
              style={{ letterSpacing: '2px' }}
            >
              Make-Up
            </Link>

            <div className="d-flex flex-row w-25 justify-content-end align-items-center gap-4">
              <Link className="nav-link p-0 text-dark d-flex align-items-center gap-2" to="/auth">
                <i className="bi bi-person fs-4"></i>
                {user && <span className="small fw-bold d-none d-md-inline">{user.name}</span>}
              </Link>
              
              <Link className="nav-link p-0 text-dark position-relative" to="/cart">
                <i className="bi bi-bag fs-4"></i>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger" 
                        style={{ fontSize: '10px', minWidth: '18px', height: '18px' }}>
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>

        <div className="container">
          <ul className="nav d-flex justify-content-between py-2 small fw-semibold text-uppercase">
            {categories.map((cat) => (
              <li className="nav-item" key={cat.slug}>
                <Link className="nav-link px-0 text-dark" to={`/section/${cat.slug}`}>
                  {cat.name}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link className="nav-link px-0 text-danger" to="/section/sales">Акції</Link>
            </li>
          </ul>
        </div>
      </header>

      <main className="container mt-4">
        <Outlet />
      </main>

      <footer className="mt-5 pt-5 border-top bg-light">
        <div className="container text-center mb-5 pb-4 border-bottom">
          <h5 className="fw-normal mb-4">Дізнавайтесь першими про розпродажі і новинки!</h5>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <input
              type="email"
              className="form-control w-25 border-0 border-bottom rounded-0 bg-transparent"
              placeholder="Електронна пошта"
            />
            <button className="btn btn-link text-uppercase text-dark fw-bold text-decoration-none">
              ПІДПИСАТИСЯ
            </button>
          </div>
          <div className="d-flex justify-content-center gap-4 mt-4 fs-5">
            <i className="bi bi-facebook pointer"></i>
            <i className="bi bi-youtube pointer"></i>
            <i className="bi bi-instagram pointer"></i>
          </div>
        </div>

        <div className="container mb-5">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="col">
              <p className="mb-2 pointer">Про доставку</p>
              <p className="mb-2 pointer">Способи оплати</p>
              <p className="mb-2 pointer">Про продукцію</p>
            </div>
            <div className="col">
              <p className="mb-2 pointer">Статті</p>
              <p className="mb-2 pointer">Новини</p>
              <p className="mb-2 pointer">PREMIUM</p>
            </div>
            <div className="col">
              <p className="fw-bold mb-2 pointer">Rewards</p>
              <p className="mb-2 pointer">Умови</p>
              <p className="mb-2 pointer">Повернення</p>
            </div>
            <div className="col">
              <p className="mb-2 pointer">Про нас</p>
              <p className="mb-2 pointer">Контакти</p>
              <p className="mb-2 pointer">HUB</p>
            </div>
            <div className="col text-end">
              <p className="fw-bold mb-1 fs-5">(044) 374 03 83</p>
              <p className="text-muted small">Щоденно з 7:55 до 20:05</p>
              <p className="text-primary mt-2 pointer">Зворотний дзвінок</p>
            </div>
          </div>
        </div>

        <div className="text-center py-4 border-top bg-white">
          <p className="text-muted small mb-0">© MAKEUP 2009–2026</p>
        </div>
      </footer>
    </>
  );
}