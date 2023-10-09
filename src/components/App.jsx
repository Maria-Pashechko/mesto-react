import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    console.log("открытие попапа профиля")
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    console.log("открытие попапа карточки")
  }

  function handleEditAvatarClick() {    
    setIsEditAvatarPopupOpen(true);
    console.log("открытие попапа аватара")
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    console.log("закрытие попапа")
  }

  return (
    <div className = "App">
      <div className = "page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick} // isOpen=isEditProfilePopupOpen
          onAddPlace={handleAddPlaceClick} // isOpen=isAddPlacePopupOpen
          onEditAvatar={handleEditAvatarClick} // isOpen=isEditAvatarPopupOpen
          />
        <Footer />
      </div>

      {/* попап обновления аватара */}
      <PopupWithForm
        name = {"avatar"}
        title = {"Обновить аватар"}
        children = {
          <div className="popup__info">
            <label className="popup__label">
              <input id="avatarlink" className="popup__input popup__input_avatar_link" 
                type="url" name="link" placeholder="Ссылка на изображение" 
                autoComplete="off" required
              />
              <span className="popup__input-error avatarlink-error"></span>
            </label>
          </div>       
        }
        btnType={"save"}
        btnText={"Сохранить"}
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
      />

      {/* попап редактирования профиля */}
      <PopupWithForm
        name = {"profile"}
        title = {"Редактировать профиль"}
        children = {
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
        }
        btnType={"save"}
        btnText={"Сохранить"}
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
      />

      {/* попап добавления карточки фотографии */}
      <PopupWithForm
        name = {"card-add"}
        title = {"Новое место"}
        children = {
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
        }
        btnType={"create"}
        btnText={"Создать"}
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
      />

      {/* попап подтверждения действия */}
      <PopupWithForm
        name = {"confirm"}
        title = {"Вы уверены?"}
        btnType={"yes"}
        btnText={"Да"}
        // isOpen = {isAddPlacePopupOpen} открытие по нажатию на Х попапа с формой
        onClose = {closeAllPopups}
      />  
      {/* <div className="popup popup_type_confirm">
        <div className="popup__container">
          <button type="button" className="button popup__close-btn" aria-label="Закрыть"></button>
          <form className="popup__form" method="get" name="confirm-form" noValidate>
            <h3 className="popup__title">Вы уверены?</h3>

            <button type="submit" className="button popup__submit-btn">Да</button>
          </form>
        </div>
      </div> */}

      <ImagePopup />
      {/* <!--  попап просмотра картинки -->
      <div className="popup popup_type_open-img"> { /*popup_opened *
        <div className="popup__img-container">
          <button type="button" className="button popup__close-btn" aria-label="Закрыть"></button>
          <figure className="popup__figure">
            <img className="popup__img" src="#" alt=""/>
            <figcaption className="popup__img-caption"></figcaption>
          </figure>
        </div>
      </div> */}
    
      
      {/* <!-- template не отображается на странице HTML --> */}
      {/* <template id="card-template" className="card-template_type_default">
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
      </template> */}
    </div>
  );
}

export default App;
