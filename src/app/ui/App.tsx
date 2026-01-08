import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../../features/layout/Layout"
import Privacy from "../../pages/privacy/Privacy"
import Home from "../../pages/home/Home"
import Section from "../../pages/section/Section"
import Product from "../../pages/product/Product"
import Auth from "../../pages/auth/Auth"
import Cart from "../../pages/cart/Cart"
import { useContext } from "react"
import { AppContext, AppProvider } from "../../features/app_context/AppContext"
import Register from "../../pages/auth/Register"
import GlobalModal from "../../features/app_context/GlobalModal"
import ThankYou from "../../pages/thankyou/ThankYou"

// Внутрішній компонент, щоб мати доступ до useContext
function AppContent() {
  const { toastQueue } = useContext(AppContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} > 
            <Route index element={<Home />} />
            <Route path="privacy" element={<Privacy />}  /> 
            <Route path="home" element={<Home />}  /> 
            <Route path='section/:slug' element={<Section />} />
            <Route path='product/:slug' element={<Product />} />
            <Route path="auth" element={<Auth />} />
            <Route path="register" element={<Register />} /> 
            <Route path="cart" element={<Cart />} />
            <Route path="thank-you" element={<ThankYou />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
      <GlobalModal />

      {/* Рендеринг черги повідомлень */}
      <div className="toaster" style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {toastQueue.map((td, i) => (
          <div key={i + td.message} className="toast-text" style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '4px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            animation: 'fadeIn 0.3s ease'
          }}>
            {td.message}
          </div>
        ))}
      </div>
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}