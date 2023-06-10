export default function ImagePopup(
  {
    popupType,
    card,
    onClose
  }
) {
  const isOpen = card.link ? 'popup_opened' : ''

  return (
    <div
      className={
        `popup popup_type_${popupType} 
      ${isOpen ? 'popup_opened' : ''}`
      } id="showMesto"
    >
      <div className="popup__container-mesto">
        <button
          onClick={onClose}
          className="popup__close-button"
          type="button"
        />
        <img
          src={card.link}
          alt={card.name}
          className="popup__image-popup"
        />
        <h2 className="popup__heading-popup">{card.name}</h2>
      </div>
    </div>
  )
}