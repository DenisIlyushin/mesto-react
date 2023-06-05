export default function Main() {

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened')
  }
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_update-avatar').classList.add('popup_opened')
  }
  function handleAddMestoClick() {
    document.querySelector('.popup_type_add-mesto').classList.add('popup_opened')
  }

  return (
    <main className="content">
      <section className="profile" id="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="#" alt="Аватар пользователя" />
          <button onClick={handleEditAvatarClick} className="profile__avatar-edit-button" type="button"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__user-name"></h1>
          <p className="profile__user-job"></p>
          <button onClick={handleEditProfileClick} className=" profile__edit-button" type="button"></button>
        </div>
        <button onClick={handleAddMestoClick} className="profile__add-button" type="button"></button>
      </section>
      <section className="places" id="places">
        <ul className="places__list">
        </ul>
      </section>
    </main>
  )
}