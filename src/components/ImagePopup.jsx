import React from 'react'

/** попап просмотра картинки */
function ImagePopup({card, onClose, isOpen}) {
  return (    
    <div className={`popup popup_type_open-img  ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__img-container">
        <button type="button" className="button popup__close-btn" 
          aria-label="Закрыть"
          onClick={onClose}>            
        </button>
        <figure className="popup__figure">
          <img className="popup__img" src={card.link} alt={card.name}/>
          <figcaption className="popup__img-caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;