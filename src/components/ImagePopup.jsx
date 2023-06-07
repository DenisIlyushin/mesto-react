export default function ImagePopup(
  {
    popupType,
    isOpen,
    onClose
  }
) {
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
          className="popup__close-button" type="button"
        />
        <img className="popup__image-popup" src="#" alt="#"/>
        <h2 className="popup__heading-popup"></h2>
      </div>
    </div>
  )
}