import Card from './Card.jsx';
import api from "../utils/api";
import {useEffect, useState} from "react";

export default function Main(
  {
    onUserAvatarEdit,
    onUserProfileEdit,
    onMestoAdd,
    onMestoDelete,
    onMestoShow
  }
) {
  const [user, setUser] = useState({});
  const [initialCards, setInitialCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userInfo, cards]) => {
        setUser(userInfo);
        setInitialCards(cards);
      })
      .catch(console.log);
  }, [])

  return (
    <main className="content">
      <section
        className="profile"
        id="profile"
      >
        <div className="profile__avatar-container">
          <img
            src={user.avatar ?? '#'}
            className="profile__avatar"
            alt="Аватар пользователя"
          />
          <button
            onClick={onUserAvatarEdit}
            className="profile__avatar-edit-button"
            type="button"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__user-name">{user.name ?? ' '}</h1>
          <p className="profile__user-job">{user.about ?? ' '}</p>
          <button
            onClick={onUserProfileEdit}
            className=" profile__edit-button"
            type="button"
          />
        </div>
        <button
          onClick={onMestoAdd}
          className="profile__add-button"
          type="button"
        />
      </section>
      <section
        className="places"
        id="places"
      >
        <ul className="places__list">
          {initialCards.map((mesto) => (
          <Card
            key={mesto._id}
            card={mesto}
            onShow={onMestoShow}
            onDelete={onMestoDelete}
          />
          ))}
        </ul>
      </section>
    </main>
  )
}