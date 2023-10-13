import React from 'react';

function PopupWithForm({name, title, btnText, isOpen, onClose, children}) { 

   /** общая разметка для попапов с формами 
   *   
   * Если блок div.popup__info выношу в общую разметку,
   * в попапе подтверждения удаления карточки нет содержимого этого div,
   * но есть его отступы. Если отступы обнулть, то нужны корректировки в отступах
   * "соседних" popup__title и popup__submit-btn. Но в таком случае,
   * на маленьких разрешениях возникает разница в 15px
   * у попапа подтверждения удаления карточки.
   * для всех попапов title -> 40px -> inputs -> 15px -> submit-btn должно быть
   * для попапа подтверждения title -> 40px -> submit-btn так должно быть
   * я не смогла найти решения этой ситуации, к сожалению
   * поэтому оставила как есть.
   * Ну, или с дизайнером договариваться)
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