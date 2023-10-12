import React from 'react';

function PopupWithForm({name, title, child, btnText, isOpen, onClose}) { 
  
  /** общая разметка для попапов с формами
   *  
   * Блок div.popup__info отсутствует в попапе подтверждения удаления карточки
   * т.о. он не общий для всех попапов с формой
   * поэтому не вынесен здесь
  */
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

          {child}

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