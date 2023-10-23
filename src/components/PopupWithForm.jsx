import React from 'react';

function PopupWithForm({name, title, btnText, isOpen, onClose, children}) { 

   /** общая разметка для попапов с формами */
  
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : '' }`}>      
      <div className="popup__container">

        <button type="button"
          className="button popup__close-btn"
          onClick={onClose}
          aria-label="Закрыть">
        </button>

        <form 
          className="popup__form" 
          method="get" 
          name={`${name}-form`} 
          noValidate>
          <h3 className="popup__title">{title}</h3>

          {children}

          <button type="submit"
            className="button popup__submit-btn"
            aria-label={btnText}>
            {btnText}
          </button>
        </form>

      </div>
    </div>  
  )
}

export default PopupWithForm;