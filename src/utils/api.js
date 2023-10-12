class Api {
    constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  /** загузка ответа с сервера 
   * возвращает успешный ответ (=Promise.resolve)
   * или показывает ошибку (=Promise.reject)*/
  _getResponseData(response) {
    if(response.ok) {
      return response.json();
    }

    throw new Error (`Что-то пошло не туда... ${response.status}`)
  }

  /** загрузка данных пользователя с сервера */
  getUserInformation() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then((response) => this._getResponseData(response))
  }

  /** обновление данных пользователя на сервере (отправка данных) */
  updateUserInformation(updateDataUser) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: updateDataUser.name,
        about: updateDataUser.about
      })    
    })
    .then((response) => this._getResponseData(response))    
  }

  /** обновление данных аватара на сервере (отправка данных) */
  updateUserAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar.link
      })    
    })
    .then((response) => this._getResponseData(response))    
  }

  /** загрузка данных карточек с сервера */
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then((response) => this._getResponseData(response))    
  }

  /** добавление данных новой карточки на сервер */
  addCard(dataCard) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(dataCard)
    })
    .then((response) => this._getResponseData(response))    
  }

  /** удаление данных карточки с сервера */
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((response) => this._getResponseData(response))
  }

  /** добавление лайка */
  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then((response) => this._getResponseData(response))    
  }

  /** отмена лайка */
  disLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((response) => this._getResponseData(response))
  }
}

/** экземпляр класса API */
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-75',
  headers: {
    'Authorization' : '585fc629-d9ef-4fc5-bd68-deb270813f1f',
    'Content-Type': "application/json"
  }
});

export default api;