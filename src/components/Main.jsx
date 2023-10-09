import React from 'react';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  return (
    <main className="content">
      <section className="profile">
        <button type="button"
          className="button profile__avatar-btn"
          onClick={onEditAvatar}
          aria-label="Открыть аватар для редактирования">
        </button>
        <div className="profile__data">
          <h1 className="profile__name">Жак Ив Кусто</h1>
          <button type="button"
            className="button profile__edit-btn"
            onClick={onEditProfile} 
            aria-label="Редактировать">
          </button>
          <p className="profile__profession">Исследватель океана</p>
        </div>
        <button type="button"
          className="button profile__add-btn"
          onClick={onAddPlace} 
          aria-label="Добавить место">
        </button>
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