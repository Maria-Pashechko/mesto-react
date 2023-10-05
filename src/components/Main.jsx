import React from 'react';

function Main() {
    
  function handleEditAvatarClick() {    
    document.querySelector('.popup_type_avatar-update').classList.add('popup_opened')
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_profile-input').classList.add('popup_opened')
  }
  
  function handleAddPlaceClick() {
    document.querySelector('.popup_type_card-add').classList.add('popup_opened')
  }

  return (
    <main className="content">
      <section className="profile">
        <button type="button" className="button profile__avatar-btn" onClick={handleEditAvatarClick} aria-label="Открыть аватар для редактирования"></button>
        <div className="profile__data">
          <h1 className="profile__name">Жак Ив Кусто</h1>
          <button type="button" className="button profile__edit-btn" onClick={handleEditProfileClick} aria-label="Редактировать"></button>
          <p className="profile__profession">Исследватель океана</p>
        </div>
        <button type="button" className="button profile__add-btn" onClick={handleAddPlaceClick} aria-label="Добавить"></button>
      </section>
      <section className="cards" aria-label="фотографии пользователя">
        <ul className="list cards__list">
          {/*место размещения карточек*/}
        </ul>
      </section>
    </main>
  );
}

export default Main;