import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import {useEffect, useState} from 'react';
import ImagePopup from './ImagePopup.jsx';
import api from '../utils/api.js';

// предотвращение двойных запросов при отрисовке начальных
// компонентов на dev-сервере при StrictMode === true
let intialized = false

function App() {
  const [isUpdateAvatarPopupOpen, setIsUpdateAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddMestoPopupOpen, setIsAddMestoPopupOpen] = useState(false);
  const [isDeleteMestoPopupOpen, setIsDeleteMestoPopupOpen] = useState(false);
  const [isShowMestoPopupOpen, setIsShowMestoPopupOpen] = useState(false);
  const [user, setUser] = useState({});
  const [initialCards, setInitialCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});


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
          setInitialCards(cards);
        })
        .catch(console.log);
    }
  }, [])

  function closeAllPopups() {
    setIsUpdateAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddMestoPopupOpen(false);
    setIsDeleteMestoPopupOpen(false);
    setIsShowMestoPopupOpen(false);
    setSelectedCard({})
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

  function handleShowMestoPopup(card) {
    setIsShowMestoPopupOpen(true);
    setSelectedCard(card)
  }

  return (
    <>
      <Header/>
      <Main
        user={user}
        cards={initialCards}
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
                 required minLength="2"/>
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
          <input className="form__input form__input_type_mesto-heading"
                 id="mestoName" name="name" type="text"
                 placeholder="Название" required minLength="2" maxLength="30"/>
            <span className="form__input-error mestoName-error"></span>
        </label>
        <label className="form__input-label">
          <input className="form__input form__input_type_mesto-url" id="mestoUrl"
                 name="link" type="url" placeholder="Ссылка на картинку"
                 required/>
            <span className="form__input-error mestoUrl-error"></span>
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
        card={selectedCard}
        isOpen={isShowMestoPopupOpen}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;