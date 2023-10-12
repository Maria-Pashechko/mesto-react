import React from "react";

function Card({card:{link, name, likes}, onCardClick}) {
  const handleCardClick = () => {
    onCardClick({link, name, likes});
  }  

  return (
    <>
      <button type="button" className="button card__img-btn" 
          style={{ backgroundImage: `url("${link}")`}}
          aria-label="Открыть фотографию для просмотра"
          onClick={handleCardClick}> 
      </button>
      <button type="button" className="button card__trash-btn"
        aria-label="Удалить фотографию">
      </button>
      <div className="card__caption">
        <h2 className="card__text">{name}</h2>
        <div className="card__like-container">  
          <button type="button" className="button card__like-btn"
            aria-label="Поставить или отменить лайк">
          </button>
          <span className="card__like-counter">{likes.length}</span>
        </div>
      </div>
    </>
  )
}

export default Card