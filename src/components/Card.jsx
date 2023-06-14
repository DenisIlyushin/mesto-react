export default function Card(
  {
    card,
    onDelete,
    onShow,
  }
) {
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
      <button
        onClick={handleCardDelete}
        className="mesto__delete-button"
        type="button"
      />
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
            className="mesto__like-button"
            type="button/"
          />
          <span className="mesto__like-count">{card.likes.length ?? 0}</span>
        </div>
      </div>
    </li>
  )
}