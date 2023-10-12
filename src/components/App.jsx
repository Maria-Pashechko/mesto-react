import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import PopupWithFormChildAvatar from './PopupWithFormChildAvatar';
import PopupWithFormChildProfile from './PopupWithFormChildProfile';
import PopupWithFormChildCardAdd from './PopupWithFormChildCardAdd';

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

      {/* попап обновления аватара */}
      <PopupWithForm
        name = {"avatar"}
        title = {"Обновить аватар"}
        child = {
          <PopupWithFormChildAvatar />
        }
        btnText = {"Сохранить"}
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
      />

      {/* попап редактирования профиля */}
      <PopupWithForm
        name = {"profile"}
        title = {"Редактировать профиль"}
        child = {
          <PopupWithFormChildProfile />
        }
        btnText = {"Сохранить"}
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
      />

      {/* попап добавления карточки фотографии */}
      <PopupWithForm
        name = {"card-add"}
        title = {"Новое место"}
        child = {
          <PopupWithFormChildCardAdd />
        }
        btnText = {"Создать"}
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
      />

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
        child ={null}
      />     
    </>
  );
}

export default App;