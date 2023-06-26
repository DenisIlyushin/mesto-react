import {CurrentUserContext} from '../context/CurrentUserContext.jsx';
import {useContext} from 'react';

export default function Card(
  {
    card,
    onDelete,
    onShow,
  }
) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  function handleCardDelete() {
    onDelete()
  }

  function handleCardClick() {
    onShow(card)
  }

  function handleLikeClick() {
    // в задании нет обработки, пока поставил заглушку
    console.log('Лайк/Дизлайк')
  }

  return (
    <li className="mesto">
      {isOwn && <button
        onClick={handleCardDelete}
        className="mesto__delete-button"
        type="button"
      />
      }
      <img
        src={card.link ?? '#'}
        alt={card.name ?? ' '}
        onClick={handleCardClick}
        className="mesto__image"
      />
      <div className="mesto__description">
        <h2 className="mesto__heading">{card.name ?? ' '}</h2>
        <div className="mesto__like-container">
          <button
            onClick={handleLikeClick}
            className={`mesto__like-button ${isLiked && 'mesto__like-button_liked'}`}
            type="button/"
          />
          <span className="mesto__like-count">{card.likes.length ?? 0}</span>
        </div>
      </div>
    </li>
  )
}