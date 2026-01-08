import { useContext } from 'react';
import { AppContext } from '../../features/app_context/AppContext';
import SiteButton from '../../features/buttons/SiteButton';
import { ButtonTypes } from '../../features/buttons/types/ButtonTypes';
import "../layout/ui/Layout.css";

export default function GlobalModal() {
  const { modal, hideModal } = useContext(AppContext);

  if (!modal) return null;

  return (
    <div className="modal-overlay" onClick={hideModal}>
      <div className="modal-content-custom" onClick={e => e.stopPropagation()}>
        <div className="modal-header-custom">
          <h4 className="fw-bold text-uppercase m-0">{modal.title}</h4>
          <button className="btn-close-custom" onClick={hideModal}>&times;</button>
        </div>
        <div className="modal-body-custom py-4">
          <p>{modal.message}</p>
        </div>
        <div className="modal-footer-custom d-flex gap-2">
          <button className="btn btn-link text-dark text-decoration-none text-uppercase fw-bold" onClick={hideModal}>
            {modal.cancelText || 'Скасувати'}
          </button>
          <div style={{minWidth: '150px'}}>
            <SiteButton 
              buttonType={ButtonTypes.Black} 
              text={modal.confirmText || 'ОК'} 
              action={() => {
                if (modal.onConfirm) modal.onConfirm();
                hideModal();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}