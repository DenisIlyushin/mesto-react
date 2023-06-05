import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_type_show-mesto" id="showMesto">
        <div className="popup__container-mesto">
          <button className="popup__close-button" type="button"></button>
          <img className="popup__image-popup" src="#" alt="#" />
          <h2 className="popup__heading-popup"></h2>
        </div>
      </div>
      <div className="popup popup_type_delete-mesto" id="deleteMesto">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <form className="form" name="mestoDelete" autoComplete="off"
                noValidate>
            <h2 className="form__title">Вы уверены?</h2>
            <button className="form__submit-button" type="submit">Да</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_edit-profile" id="editProfile">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <form className="form" name="popupEditProfileInfo" autoComplete="off"
                noValidate>
            <h2 className="form__title">Редактировать профиль</h2>
            <label className="form__input-label">
              <input className="form__input form__input_type_username" id="userName"
                     name="name" type="text" placeholder="Ваше имя?" required
                     minLength="2" maxLength="40" />
              <span className="form__input-error userName-error"></span>
            </label>
            <label className="form__input-label">
              <input className="form__input form__input_type_user-job" id="userJob"
                     name="job" type="text" placeholder="Чем занимаетесь?"
                     required minLength="2" maxLength="200" />
              <span className="form__input-error userJob-error"></span>
            </label>
            <button className="form__submit-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_update-avatar" id="updateAvatar">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <form className="form" name="popupEditProfileAvatar" autoComplete="off"
                noValidate>
            <h2 className="form__title">Обновить аватар</h2>
            <label className="form__input-label">
              <input className="form__input form__input_type_source" id="userAvatar"
                     name="avatar" type="url" placeholder="Ссылка на изображение" required
                     minLength="2" />
              <span className="form__input-error userAvatar-error"></span>
            </label>
            <button className="form__submit-button" type="submit">Обновить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add-mesto" id="addMesto">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <form className="form" name="popupAddMesto" autoComplete="off" noValidate>
            <h2 className="form__title">Новое место</h2>
            <label className="form__input-label">
              <input className="form__input form__input_type_mesto-heading"
                     id="mestoName" name="name" type="text"
                     placeholder="Название" required minLength="2" maxLength="30" />
              <span className="form__input-error mestoName-error"></span>
            </label>
            <label className="form__input-label">
              <input className="form__input form__input_type_mesto-url" id="mestoUrl"
                     name="link" type="url" placeholder="Ссылка на картинку"
                     required />
              <span className="form__input-error mestoUrl-error"></span>
            </label>
            <button className="form__submit-button" type="submit">Создать</button>
          </form>
        </div>
      </div>
      <template className="template template_type_mesto" id="mesto">
        <li className="mesto">
          <button className="mesto__delete-button" type="button"></button>
          <img className="mesto__image" src="#" alt="#" />
          <div className="mesto__description">
            <h2 className="mesto__heading"></h2>
            <div className="mesto__like-container">
              <button className="mesto__like-button" type="button"></button>
              <span className="mesto__like-count">0</span>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
