import { useContext, useState } from "react";
import { AppContext } from "../../features/app_context/AppContext";
import SiteButton from "../../features/buttons/SiteButton";
import { ButtonTypes } from "../../features/buttons/types/ButtonTypes";

export default function Auth() {
    const { user, setUser, showToast } = useContext(AppContext);
    
    // Поля форми для реєстрації/входу
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleLogin = () => {
        if (!email || !name) {
            showToast({ message: "Будь ласка, заповніть усі поля", timeout: 3000 });
            return;
        }

        // Імітація входу
        const mockUser = {
            id: Date.now(),
            name: name,
            email: email,
            phone: "+380 99 000 00 00",
            city: "Київ"
        };

        setUser(mockUser);
        showToast({ message: `Вітаємо, ${name}! Ви успішно увійшли.`, timeout: 3000 });
    };

    const handleLogout = () => {
        setUser(null);
        showToast({ message: "Ви вийшли з акаунта", timeout: 2000 });
    };

    // 1. Екран профілю (якщо користувач увійшов)
    if (user) {
        return (
            <div className="container my-5" style={{ maxWidth: "600px" }}>
                <h2 className="fw-bold mb-4 text-uppercase">Мій кабінет</h2>
                <div className="card border-0 bg-light p-4 rounded-0">
                    <div className="d-flex align-items-center mb-4">
                        <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" 
                             style={{ width: "60px", height: "60px", fontSize: "24px" }}>
                            {user.name.charAt(0)}
                        </div>
                        <div className="ms-3">
                            <h4 className="mb-0 fw-bold">{user.name}</h4>
                            <p className="text-muted mb-0">{user.email}</p>
                        </div>
                    </div>
                    
                    <div className="row g-3 mb-4">
                        <div className="col-6">
                            <label className="small text-muted text-uppercase">Телефон</label>
                            <p className="fw-medium">{user.phone}</p>
                        </div>
                        <div className="col-6">
                            <label className="small text-muted text-uppercase">Місто</label>
                            <p className="fw-medium">{user.city}</p>
                        </div>
                    </div>

                    <button className="btn btn-outline-dark rounded-0 text-uppercase fw-bold" onClick={handleLogout}>
                        Вийти з кабінету
                    </button>
                </div>
            </div>
        );
    }

    // 2. Екран авторизації (якщо користувача немає)
    return (
        <div className="container my-5" style={{ maxWidth: "450px" }}>
            <div className="text-center mb-5">
                <h2 className="fw-bold text-uppercase">Вхід до кабінету</h2>
                <p className="text-muted">Отримуйте бонуси та відстежуйте замовлення</p>
            </div>

            <div className="d-flex flex-column gap-3">
                <input 
                    type="text" 
                    className="form-control rounded-0 border-dark py-3" 
                    placeholder="Ваше ім'я"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="email" 
                    className="form-control rounded-0 border-dark py-3" 
                    placeholder="Електронна пошта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
            
            <p className="text-center mt-4 small text-muted">
                Натискаючи "Увійти", ви погоджуєтесь з умовами користування та політикою конфіденційності.
            </p>
        </div>
    );
}