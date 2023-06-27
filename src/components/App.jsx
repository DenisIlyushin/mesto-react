import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import {useEffect, useState} from 'react';
import {CurrentUserContext} from '../context/CurrentUserContext';
import ImagePopup from './ImagePopup.jsx';
import api from '../utils/api.js';
import EditProfilePopup from './EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup.jsx';
import AddMestoPopup from './AddMestoPopup.jsx';

function App() {
  //обработка попапов
  const [isUpdateAvatarPopupOpen, setIsUpdateAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddMestoPopupOpen, setIsAddMestoPopupOpen] = useState(false);
  const [isDeleteMestoPopupOpen, setIsDeleteMestoPopupOpen] = useState(false);
  //обработка данных
  const [selectedCard, setSelectedCard] = useState({});
  const [initialCards, setInitialCards] = useState([]);
  // контекст пользователя
  const [user, setUser] = useState({});
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userInfo, cards]) => {
        setUser(userInfo);
        setInitialCards(cards);
      })
      .catch(console.log);
  }, [])

  function closeAllPopups() {
    setIsUpdateAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddMestoPopupOpen(false);
    setIsDeleteMestoPopupOpen(false);
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

  // function handleDeleteMestoPopup() {
  //   setIsDeleteMestoPopupOpen(true)
  // }

  function handleLikeClick(card) {
    api.likeCard(card._id)
      .then((newCard) => {
        setInitialCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch(console.log)
  }

  function handleDislikeClick(card) {
    api.dislikeCard(card._id)
      .then((newCard) => {
        setInitialCards((state) => state.map(c => c._id === card._id ? newCard : c))
      })
      .catch(console.log)
  }

  function handleDeleteMesto(card) {
    api.deleteCard(card._id).then(() => {
      setInitialCards((state) => state.filter(c => c._id !== (card._id)))
    })
      .catch(console.log)
  }

  function handleProfileUpdate(info) {
    api.setUserInfo(info)
      .then(userInfo => {
          setUser(userInfo);
          closeAllPopups()
        }
      )
      .catch(console.log)
  }

  function handleAvatarUpdate(info) {
    api.setUserAvatar(info)
      .then(avatar => {
        setUser(avatar);
        closeAllPopups()
      })
      .catch(console.log)
  }

  function handleMestoAdd(data) {
    api.createMesto(data)
      .then((card) => {
        setInitialCards([card, ...initialCards]);
        closeAllPopups()
      })
      .catch(console.log)
  }

  return (
    <CurrentUserContext.Provider value={user}>
      <Header/>
      <Main
        onUserAvatarEdit={handleUpdateAvatarPopup}
        onUserProfileEdit={handleEditProfilePopup}
        onMestoAdd={handleAddMestoPopup}
        onMestoDelete={handleDeleteMesto}
        onMestoShow={setSelectedCard}
        onMestoLike={handleLikeClick}
        onMestoDislike={handleDislikeClick}
        cards={initialCards}
      />
      <Footer/>
      <EditAvatarPopup
        isOpen={isUpdateAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdate={handleAvatarUpdate}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdate={handleProfileUpdate}
      />
      <AddMestoPopup
        isOpen={isAddMestoPopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleMestoAdd}
      />
      <PopupWithForm
        popupType={'delete-mesto'}
        popupTitle={'Вы уверены?'}
        submitText={'Да'}
        isOpen={isDeleteMestoPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup
        popupType={'show-mesto'}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </ CurrentUserContext.Provider>
  );
}

export default App;
