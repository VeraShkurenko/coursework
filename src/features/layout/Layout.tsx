import SiteButton from "../buttons/SiteButton";
import { ButtonTypes } from "../buttons/types/ButtonTypes";

export default function Layout() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid d-flex align-items-center m-4">
       
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
            </form>

            <a className="navbar-brand mx-auto" href="#">Make-Up</a>

                    <ul className="navbar-nav d-flex flex-row mb-0">
              <li className="nav-item me-3">
                <a className="nav-link" href="#"><i className="bi bi-person"></i></a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#"><i className="bi bi-heart"></i></a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#"><i className="bi bi-bag"></i></a>
              </li>
            </ul>
          </div>
        </nav>

 
      <ul className="nav d-flex justify-content-between px-4">
  <li className="nav-item">
    <a className="nav-link" href="#">Парфумерія</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Макіяж</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Обличчя</a>
  </li>
    <li className="nav-item">
    <a className="nav-link" href="#">Волосся</a>
  </li>
    <li className="nav-item">
    <a className="nav-link" href="#">Тіло</a>
  </li>
    <li className="nav-item">
    <a className="nav-link" href="#">Здоров'я і догляд</a>
  </li>
    <li className="nav-item">
    <a className="nav-link" href="#">Акссесуари і техніка</a>
  </li>
    <li className="nav-item">
    <a className="nav-link" href="#">Fashion</a>
  </li>
    <li className="nav-item">
    <a className="nav-link" href="#">Чоловікам</a>
  </li>
    <li className="nav-item">
    <a className="nav-link" href="#">Подарунки</a>
  </li>  <li className="nav-item">
    <a className="nav-link" href="#">Бренди</a>
  </li>
</ul>

      </header>

 
 <SiteButton buttonType={ButtonTypes.Black} text="Click me" />
 <SiteButton buttonType={ButtonTypes.White} text="Click me" />

  
    </>
  );
}
