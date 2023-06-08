import Card from './Card.jsx';

export default function Main(
  {
    user,
    cards,
    onUserAvatarEdit,
    onUserProfileEdit,
    onMestoAdd,
    onMestoDelete,
    onMestoShow
  }
) {

  return (
    <main className="content">
      <section className="profile" id="profile">
        <div className="profile__avatar-container">
          <img
            src={user.avatar}
            className="profile__avatar" alt="Аватар пользователя"
          />
          <button
            onClick={onUserAvatarEdit}
            className="profile__avatar-edit-button" type="button"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__user-name">{user.name}</h1>
          <p className="profile__user-job">{user.about}</p>
          <button
            onClick={onUserProfileEdit}
            className=" profile__edit-button" type="button"
          />
        </div>
        <button
          onClick={onMestoAdd}
          className="profile__add-button" type="button"
        />
      </section>
      <section className="places" id="places">
        <ul className="places__list">
          {cards.map((mesto) => (
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