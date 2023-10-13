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
  const [isImgOpen, setIsImgOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})
  

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {    
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImgOpen(false);
  }

  function onCardClick(card) {
    setIsImgOpen(true);
    setSelectedCard(card)
  }
  
  return (
    <>
      <div className = "page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick} // isOpen=isEditProfilePopupOpen
          onAddPlace={handleAddPlaceClick} // isOpen=isAddPlacePopupOpen
          onEditAvatar={handleEditAvatarClick} // isOpen=isEditAvatarPopupOpen
          onCardClick = {onCardClick}
        />
        <Footer />
      </div>

      {/** Благодарю за подробное объяснение с этим моментом! 
         * Буквально разжевали)
         * Надеюсь, теперь верно уяснила)
         * 
         * после зачёта - удалю все лишние комментарии)
         */}

      {/* попап обновления аватара */}
      <PopupWithForm
        name = {"avatar"}
        title = {"Обновить аватар"}
        btnText = {"Сохранить"}
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
      >
        <div className="popup__info">
          <label className="popup__label">
            <input id ="avatarlink"
              className="popup__input popup__input_avatar_link" 
              type="url" name="link"
              placeholder="Ссылка на изображение" 
              autoComplete="off"
              required
            />
            <span className="popup__input-error avatarlink-error"></span>
          </label>
        </div>               
      </PopupWithForm>

      {/* попап редактирования профиля */}
      <PopupWithForm
        name = {"profile"}
        title = {"Редактировать профиль"}
        btnText = {"Сохранить"}
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
      >
        <div className="popup__info">
          <label className="popup__label">
            <input id="username"
              className="popup__input popup__input_field_name" 
              type="text" name="name"
              placeholder="Имя" autoComplete="off"
              minLength="2" maxLength="40"
              required
            />
            <span className="popup__input-error username-error"></span>
          </label>
          <label className="popup__label">
            <input id="userprofession"
              className="popup__input popup__input_field_profession"
              type="text" name="about"
              placeholder="О себе" autoComplete="off"
              minLength="2" maxLength="200"
              required
            />
            <span className="popup__input-error userprofession-error"></span>
          </label>
        </div>
      </PopupWithForm>

      {/* попап добавления карточки фотографии */}
      <PopupWithForm
        name = {"card-add"}
        title = {"Новое место"}
        btnText = {"Создать"}
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
      >
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
      </PopupWithForm>

      {/* попап просмотра картинки */}
      <ImagePopup 
        card = {selectedCard}
        isOpen = {isImgOpen}
        onClose = {closeAllPopups}
      />

      {/* попап подтверждения действия */}
      <PopupWithForm
        name = {"confirm"}
        title = {"Вы уверены?"}
        btnText = {"Да"}
        // isOpen = {isConfirmPopupOpen} открытие по клику на корзину карточки
        onClose = {closeAllPopups}
        child = {null}
      />     
    </>
  );
}

export default App;