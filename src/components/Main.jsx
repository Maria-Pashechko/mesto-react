import React from 'react';
import api from '../utils/api.js';
import Card from './Card.jsx'

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = React.useState("")
  const [userDescription, setUserDescription] = React.useState("")
  const [userAvatar, setUserAvatar] = React.useState("")
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    //загрузка данных пользователя, карточек с сервера
    Promise.all([api.getUserInformation(), api.getInitialCards()])
    .then(([userInfo, arrayCards]) => {
      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      setUserAvatar(userInfo.avatar);
      setCards(arrayCards);
    })

    .catch((error) => {
      //Тут обрабатываем ошибку
      console.log(error)
    })   
  }, [])

  return (
    <main className="content">
      
      <section className="profile">
        <button type="button"
          className="button profile__avatar-btn"
          style={{ backgroundImage: `url(${userAvatar})` }} 
          onClick={onEditAvatar}
          aria-label="Открыть аватар для редактирования">
        </button>
        <div className="profile__data">
          <h1 className="profile__name">{`${userName}`}</h1>
          <button type="button"
            className="button profile__edit-btn"
            onClick={onEditProfile} 
            aria-label="Редактировать">
          </button>
          <p className="profile__profession">{`${userDescription}`}</p>
        </div>
        <button type="button"
          className="button profile__add-btn"
          onClick={onAddPlace} 
          aria-label="Добавить место">
        </button>
      </section>

      <section className="cards" aria-label="фотографии пользователя">
        <ul className="list cards__list">          
          {cards.map((card) => (
            <Card key={card._id}
              card = {card}
              onCardClick = {onCardClick}
            />)
          )}
        </ul>
      </section>

    </main>
  );
}

export default Main;