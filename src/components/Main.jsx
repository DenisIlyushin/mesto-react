import {useEffect, useState} from 'react';
import api from '../utils/api.js'

// предотвращение двойных запросов при отрисовке начальных
// компонентов на dev-сервере при StrictMode === true
let intialized = false

export default function Main(
  {
    onUserAvatarEdit,
    onUserProfileEdit,
    onMestoAdd,
    onMestoDelete,
    onMestoShow
  }
) {

  const [user, setUser] = useState('')

  useEffect(() => {
    // предотвращение двойных запросов при отрисовке начальных
    // компонентов на dev-сервере при StrictMode === true
    if (!intialized) {
      intialized = true
      Promise.all([api.getUserInfo(), api.getCards()])
        .then(([userInfo, cards]) => {
          setUser({
            id: userInfo._id,
            name: userInfo.name,
            job: userInfo.about,
            avatar: userInfo.avatar
          });
        })
        .catch(console.log);
    }
  }, [])


  return (
    <main className="content">
      <section className="profile" id="profile">
        <div className="profile__avatar-container">
          <img
            src={user.avatar}
            className="profile__avatar" alt="Аватар пользователя"/>
          <button
            onClick={onUserAvatarEdit}
            className="profile__avatar-edit-button" type="button"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__user-name">{user.name}</h1>
          <p className="profile__user-job">{user.about}</p>
          <button
            onClick={onUserProfileEdit}
            className=" profile__edit-button" type="button"></button>
        </div>
        <button
          onClick={onMestoAdd}
          className="profile__add-button" type="button"></button>
      </section>
      <section className="places" id="places">
        <ul className="places__list">
        </ul>
      </section>
    </main>
  )
}