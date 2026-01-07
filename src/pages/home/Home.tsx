import { SectionDao } from "../../entities/section/api/SectionDao";
import SiteButton from "../../features/buttons/SiteButton";
import { ButtonTypes } from "../../features/buttons/types/ButtonTypes";
import Section from "../section/Section";
import './ui/home.css';

export default function Home() {
  
    const sections = SectionDao.getHomeSections();

    return <>
  

<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/img/ban1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/img/ban2.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/img/ban3.jpg" className="d-block w-100" alt="..." />
    </div>
       <div className="carousel-item">
      <img src="/img/ban4.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/img/ban5.jpg" className="d-block w-100" alt="..." />
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    {sections.map(section => (
        <Section
          key={section.title}
          section={section}
        />
      ))} 
    </>
}