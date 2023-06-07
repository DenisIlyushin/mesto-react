import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import {useState} from 'react';
import ImagePopup from './ImagePopup.jsx';

function App() {
  const [isUpdateAvatarPopupOpen, setIsUpdateAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddMestoPopupOpen, setIsAddMestoPopupOpen] = useState(false);
  const [isDeleteMestoPopupOpen, setIsDeleteMestoPopupOpen] = useState(false);
  const [isShowMestoPopupOpen, setIsShowMestoPopupOpen] = useState(false);

  function closeAllPopups() {
    setIsUpdateAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddMestoPopupOpen(false);
    setIsDeleteMestoPopupOpen(false);
    setIsShowMestoPopupOpen(false)
  }

  function handleUpdateAvatarPopup() {
    setIsUpdateAvatarPopupOpen(true)
  }

  function handleEditProfilePopup() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddMestoPopup() {
    setIsAddMestoPopupOpen(true)
  }

  function handleDeleteMestoPopup() {
    setIsDeleteMestoPopupOpen(true)
  }

  function handleShowMestoPopup() {
    setIsShowMestoPopupOpen(true)
  }

  return (
    <>
      <Header/>
      <Main
        onUserAvatarEdit={handleUpdateAvatarPopup}
        onUserProfileEdit={handleEditProfilePopup}
        onMestoAdd={handleAddMestoPopup}
        onMestoDelete={handleDeleteMestoPopup}
        onMestoShow={handleShowMestoPopup}
      />
      <Footer/>
      <PopupWithForm
        popupType={'update-avatar'}
        popupTitle={'Обновить аватар'}
        submitText={'Обновить'}
        isOpen={isUpdateAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__input-label">
          <input className="form__input form__input_type_source" id="userAvatar"
                 name="avatar" type="url" placeholder="Ссылка на изображение"
                 required  minLength="2"/>
          <span className="form__input-error userAvatar-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        popupType={'edit-profile'}
        popupTitle={'Редактировать профиль'}
        submitText={'Сохранить'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__input-label">
          <input className="form__input form__input_type_username" id="userName"
                 name="name" type="text" placeholder="Ваше имя?" required
                 minLength="2" maxLength="40"/>
          <span className="form__input-error userName-error"></span>
        </label>
        <label className="form__input-label">
          <input className="form__input form__input_type_user-job" id="userJob"
                 name="job" type="text" placeholder="Чем занимаетесь?"
                 required minLength="2" maxLength="200"/>
          <span className="form__input-error userJob-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        popupType={'add-mesto'}
        popupTitle={'Новое место'}
        submitText={'Создать'}
        isOpen={isAddMestoPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__input-label">
          <input className="form__input form__input_type_username" id="userName"
                 name="name" type="text" placeholder="Ваше имя?" required
                 minLength="2" maxLength="40"/>
          <span className="form__input-error userName-error"></span>
        </label>
        <label className="form__input-label">
          <input className="form__input form__input_type_user-job" id="userJob"
                 name="job" type="text" placeholder="Чем занимаетесь?"
                 required minLength="2" maxLength="200"/>
          <span className="form__input-error userJob-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        popupType={'delete-mesto'}
        popupTitle={'Вы уверены?'}
        submitText={'Да'}
        isOpen={isDeleteMestoPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup
        popupType={'delete-mesto'}
        isOpen={isShowMestoPopupOpen}
        onClose={closeAllPopups}
      />

      <template className="template template_type_mesto" id="mesto">
        <li className="mesto">
          <button className="mesto__delete-button" type="button"></button>
          <img className="mesto__image" src="#" alt="#"/>
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
