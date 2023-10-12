import React from 'react';

function PopupWithFormChildCardAdd() {
  return (
    <div className="popup__info">            
      <label className="popup__label">
        <input id="cardname" className="popup__input popup__input_card_name"
          type="text" name="name" placeholder="Название"
          autoComplete="off" minLength="2" maxLength="30" required
        />
        <span className="popup__input-error cardname-error"></span>
      </label>

      <label className="popup__label">
          <input id="cardlink" className="popup__input popup__input_card_link"
            type="url" name="link" placeholder="Ссылка на картинку"
            autoComplete="off" required
          />
          <span className="popup__input-error cardlink-error"></span>
        </label>
    </div>
  )
}

export default PopupWithFormChildCardAdd