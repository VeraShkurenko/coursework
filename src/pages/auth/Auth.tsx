import { useContext, useState } from "react";
import { AppContext } from "../../features/app_context/AppContext";
import SiteButton from "../../features/buttons/SiteButton";
import { ButtonTypes } from "../../features/buttons/types/ButtonTypes";
import { Link, useNavigate } from "react-router-dom";

export default function Auth() {
    const { user, setUser, login, showToast } = useContext(AppContext);
    const navigate = useNavigate();
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            showToast({ message: "Будь ласка, введіть email та пароль", timeout: 3000 });
            return;
        }


        const success = login(email, password);
        
        if (success) {
            navigate("/home"); 
        }
    };

    const handleLogout = () => {
        setUser(null);
        showToast({ message: "Ви вийшли з акаунта", timeout: 2000 });
    };

    if (user) {
        return (
            <div className="container my-5" style={{ maxWidth: "600px" }}>
                <h2 className="fw-bold mb-4 text-uppercase">Мій кабінет</h2>
                <div className="card border-0 bg-light p-4 rounded-0 shadow-sm">
                    <div className="d-flex align-items-center mb-4">
                        <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" 
                             style={{ width: "60px", height: "60px", fontSize: "24px" }}>
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="ms-3">
                            <h4 className="mb-0 fw-bold">{user.name}</h4>
                            <p className="text-muted mb-0">{user.email}</p>
                        </div>
                    </div>
                    
                    <div className="row g-3 mb-4 border-top pt-3">
                        <div className="col-6">
                            <label className="small text-muted text-uppercase d-block">Телефон</label>
                            <p className="fw-medium">{user.phone || "Не вказано"}</p>
                        </div>
                        <div className="col-6">
                            <label className="small text-muted text-uppercase d-block">Місто</label>
                            <p className="fw-medium">{user.city || "Не вказано"}</p>
                        </div>
                    </div>

                    <button className="btn btn-outline-dark rounded-0 text-uppercase fw-bold w-100" onClick={handleLogout}>
                        Вийти з кабінету
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-5" style={{ maxWidth: "450px" }}>
            <div className="text-center mb-5">
                <h2 className="fw-bold text-uppercase">Вхід до кабінету</h2>
                <p className="text-muted">Увійдіть, щоб користуватися своїми бонусами</p>
            </div>

            <div className="d-flex flex-column gap-3">
                <input 
                    type="email" 
                    className="form-control rounded-0 border-dark py-3" 
                    placeholder="Електронна пошта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    className="form-control rounded-0 border-dark py-3" 
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
<div className="full-width-btn-wrapper mb-4">
                <div className="mt-2">
                    <SiteButton 
                        buttonType={ButtonTypes.Black} 
                        text="Увійти" 
                        action={handleLogin}
                    />
                </div>
                </div>
            </div>
            
            <div className="text-center mt-4">
                <p className="mb-1 text-muted">Немає акаунту?</p>
                <Link to="/register" className="text-dark fw-bold text-uppercase text-decoration-none border-bottom border-dark">
                    Створити акаунт
                </Link>
            </div>
            
            <p className="text-center mt-5 small text-muted" style={{ fontSize: "11px" }}>
                Натискаючи "Увійти", ви погоджуєтесь з умовами користування та політикою конфіденційності.
            </p>
        </div>
    );
}

