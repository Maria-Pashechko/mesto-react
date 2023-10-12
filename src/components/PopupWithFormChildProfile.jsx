import React from 'react';

function PopupWithFormChildProfile() {
  return (
    <div className="popup__info">
      <label className="popup__label">
        <input id="username" className="popup__input popup__input_field_name" 
          type="text" name="name" placeholder="Имя"
          autoComplete="off" minLength="2" maxLength="40" required
        />
        <span className="popup__input-error username-error"></span>
      </label>
      <label className="popup__label">
        <input id="userprofession" className="popup__input popup__input_field_profession"
          type="text" name="about" placeholder="О себе"
          autoComplete="off" minLength="2" maxLength="200" required
        />
        <span className="popup__input-error userprofession-error"></span>
      </label>
    </div>
  )
}

export default PopupWithFormChildProfile