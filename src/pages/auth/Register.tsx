import { useState, useContext } from 'react';
import { AppContext } from '../../features/app_context/AppContext';
import { useNavigate, Link } from 'react-router-dom';
import type { UserType } from '../../entities/user/model/UserType';
import SiteButton from '../../features/buttons/SiteButton';
import { ButtonTypes } from '../../features/buttons/types/ButtonTypes';

export default function Register() {
    const { register, showToast } = useContext(AppContext);
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        password: '',
        phone: '',
        city: ''
    });

    const handleRegister = () => {
        if (!formData.name || !formData.email || !formData.password) {
            showToast({ message: "Будь ласка, заповніть обов'язкові поля (Ім'я, Email, Пароль)", timeout: 3000 });
            return;
        }

        register(formData as UserType); 

        navigate('/auth');
    };

    return (
        <div className="container my-5" style={{ maxWidth: "450px" }}>
            <div className="text-center mb-5">
                <h2 className="fw-bold text-uppercase">Реєстрація</h2>
                <p className="text-muted">Створіть акаунт, щоб зберігати історію замовлень</p>
            </div>

            <div className="d-flex flex-column gap-3">
                <input 
                    type="text" 
                    className="form-control rounded-0 border-dark py-3" 
                    placeholder="Ваше ім'я *"
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <input 
                    type="email" 
                    className="form-control rounded-0 border-dark py-3" 
                    placeholder="Електронна пошта *"
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                />
                <input 
                    type="tel" 
                    className="form-control rounded-0 border-dark py-3" 
                    placeholder="Номер телефону"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                />
                <input 
                    type="text" 
                    className="form-control rounded-0 border-dark py-3" 
                    placeholder="Місто"
                    value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                />
                <input 
                    type="password" 
                    className="form-control rounded-0 border-dark py-3" 
                    placeholder="Пароль *"
                    required
                    value={formData.password}
                    onChange={e => setFormData({...formData, password: e.target.value})}
                />

                <div className="full-width-btn-wrapper mb-2">
                    <div className="mt-2">
                        <SiteButton 
                            buttonType={ButtonTypes.Black} 
                            text="Зареєструватися" 
                            action={handleRegister}
                        />
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-4">
                <p className="mb-1 text-muted">Вже маєте акаунт?</p>
                <Link to="/auth" className="text-dark fw-bold text-uppercase text-decoration-none border-bottom border-dark">
                    Увійти до кабінету
                </Link>
            </div>
            
            <p className="text-center mt-5 small text-muted" style={{ fontSize: "11px" }}>
                * Поля, обов'язкові для заповнення. Створюючи акаунт, ви погоджуєтесь з правилами магазину.
            </p>
        </div>
    );
}