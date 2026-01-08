import { useNavigate, useSearchParams } from "react-router-dom";
import SiteButton from "../../features/buttons/SiteButton";
import { ButtonTypes } from "../../features/buttons/types/ButtonTypes";
import Section from "../section/Section";
import { SectionDao } from "../../entities/section/api/SectionDao";

export default function ThankYou() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const orderNumber = searchParams.get("order") || Math.floor(Math.random() * 100000);
    
    const recommendations = SectionDao.getHomeSections()[0]; 

    return (
        <div className="container my-5 pt-5 text-center">
            <div className="mb-4">
                <i className="bi bi-check2-circle display-1 text-success"></i>
            </div>
            <h1 className="fw-bold text-uppercase mb-3">Дякуємо за замовлення!</h1>
            <p className="lead mb-2">Ваш номер замовлення: <span className="fw-bold">#{orderNumber}</span></p>
            <p className="text-muted mb-5">Наш менеджер зв'яжеться з вами протягом 15 хвилин для підтвердження.</p>

            <div className="d-flex justify-content-center mb-5">
                <div style={{ maxWidth: "300px", width: "100%" }}>
                    <SiteButton 
                        buttonType={ButtonTypes.Black} 
                        text="На головну" 
                        action={() => navigate("/")} 
                    />
                </div>
            </div>

            <hr className="my-5" />

            <div className="text-start">
                <h3 className="fw-bold text-uppercase mb-4 text-center">Можливо, вас також зацікавить</h3>
                {recommendations && (
                    <Section section={recommendations} />
                )}
            </div>
        </div>
    );
}