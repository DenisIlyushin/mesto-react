export default function Main() {
  return (
    <main className="content">
      <section className="profile" id="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="#" alt="Аватар пользователя" />
          <button className="profile__avatar-edit-button" type="button"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__user-name"></h1>
          <p className="profile__user-job"></p>
          <button className=" profile__edit-button" type="button"></button>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>
      <section className="places" id="places">
        <ul className="places__list">
        </ul>
      </section>
    </main>
  )
}