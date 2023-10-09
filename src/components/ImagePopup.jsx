import React from 'react'

{/* попап просмотра картинки */}
function ImagePopup() {
  return (    
    <div className="popup popup_type_open-img"> { /*popup_opened */}
      <div className="popup__img-container">
        <button type="button" className="button popup__close-btn" aria-label="Закрыть"></button>
        <figure className="popup__figure">
          <img className="popup__img" src="#" alt=""/>
          <figcaption className="popup__img-caption"></figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;