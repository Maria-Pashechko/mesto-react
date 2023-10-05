import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>

      {/* попап обновления аватара*/}
      <div className="popup popup_type_avatar-update"> {/*<!-- popup_opened --> */}
        <div className="popup__container">
          <button type="button" className="button popup__close-btn" aria-label="Закрыть"></button>
          <form className="popup__form" method="get" name="avatar-form" noValidate>
            <h3 className="popup__title">Обновить аватар</h3>
            <div className="popup__info">
              <label className="popup__label">
                <input id="avatarlink" className="popup__input popup__input_avatar_link" type="url" name="link" placeholder="Ссылка на изображение" autoComplete="off" required/>
                <span className="popup__input-error avatarlink-error"></span>
              </label>
            </div>
            <button type="submit" className="button popup__submit-btn">Сохранить</button>
          </form>
        </div>
      </div>

      { /* попап редактирования профля */ }
      <div className="popup popup_type_profile-input"> {/*<!-- здесь class popup_opened - управляется в js -->*/}
        <div className="popup__container">
          <button type="button" className="button popup__close-btn" aria-label="Закрыть"></button>
          <form className="popup__form" method="get" name="profile-form" noValidate>
            <h3 className="popup__title">Редактировать профиль</h3>
            <div className="popup__info">
              <label className="popup__label">
                <input id="username" className="popup__input popup__input_field_name" type="text" name="name" placeholder="Имя" autoComplete="off" minLength="2" maxLength="40" required/>
                <span className="popup__input-error username-error"></span>
              </label>
              <label className="popup__label">
                <input id="userprofession" className="popup__input popup__input_field_profession" type="text" name="about" placeholder="О себе" autoComplete="off" minLength="2" maxLength="200" required/>
                <span className="popup__input-error userprofession-error"></span>
              </label>
            </div>
            <button type="submit" className="button popup__submit-btn">Сохранить</button>
          </form>
        </div>
      </div>

      {/* попап добавления карточки фотографии */}
      <div className="popup popup_type_card-add"> { /*popup_opened */}
        <div className="popup__container">
          <button type="button" className="button popup__close-btn" aria-label="Закрыть"></button>
          <form className="popup__form" method="get" name="card-form" noValidate>
            <h3 className="popup__title">Новое место</h3>
            <div className="popup__info">
              <label className="popup__label">
                <input id="cardname" className="popup__input popup__input_card_name" type="text" name="name" placeholder="Название" autoComplete="off" minLength="2" maxLength="30" required/>
                <span className="popup__input-error cardname-error"></span>
              </label>
              <label className="popup__label">
                <input id="cardlink" className="popup__input popup__input_card_link" type="url" name="link" placeholder="Ссылка на картинку" autoComplete="off" required/>
                <span className="popup__input-error cardlink-error"></span>
              </label>
            </div>
            <button type="submit" className="button popup__submit-btn">Создать</button>
          </form>
        </div>
      </div>

      {/* <!--  попап просмотра картинки --> */}
      <div className="popup popup_type_open-img"> { /*popup_opened */}
        <div className="popup__img-container">
          <button type="button" className="button popup__close-btn" aria-label="Закрыть"></button>
          <figure className="popup__figure">
            <img className="popup__img" src="#" alt=""/>
            <figcaption className="popup__img-caption"></figcaption>
          </figure>
        </div>
      </div>
    
      {/* <!-- попап подтверждения действия --> */}
      <div className="popup popup_type_confirm"> { /*popup_opened */}
        <div className="popup__container">
          <button type="button" className="button popup__close-btn" aria-label="Закрыть"></button>
          <form className="popup__form" method="get" name="card-remove-form" noValidate>
            <h3 className="popup__title">Вы уверены?</h3>
            <button type="submit" className="button popup__submit-btn">Да</button>
          </form>
        </div>
      </div>

      {/* <!-- template не отображается на странице HTML --> */}
      <template id="card-template" className="card-template_type_default">
        <li className="card">
          <button type="button" className="button card__img-btn" aria-label="Открыть фотографию для просмотра">
            <img className="card__img" src="#" alt=""/>
          </button>
          <button type="button" className="button card__trash-btn" aria-label="Удалить фотографию"></button>
          <div className="card__caption">
            <h2 className="card__text"></h2>
            <div className="card__like-container">  
              <button type="button" className="button card__like-btn" aria-label="Поставить или отменить лайк"></button>
              <span className="card__like-counter">0</span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
