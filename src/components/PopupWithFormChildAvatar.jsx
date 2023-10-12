import React from 'react';

function PopupWithFormChildAvatar() {
  return (
    <div className="popup__info">
      <label className="popup__label">
        <input id ="avatarlink" className="popup__input popup__input_avatar_link" 
          type="url" name="link" placeholder="Ссылка на изображение" 
          autoComplete="off" required
        />
        <span className="popup__input-error avatarlink-error"></span>
      </label>
    </div> 
  )
}

export default PopupWithFormChildAvatar