import useCloseOnEsc from '../utils/useCloseOnEsc.jsx';

export default function PopupWithForm(
  {
    popupType,
    popupTitle,
    submitText,
    children,
    isOpen,
    onClose,
    onSubmit,
  }
) {

  useCloseOnEsc({ isOpen, onClose })

  return (
    <div
      className={
        `popup popup_type_${popupType} 
      ${isOpen && 'popup_opened'}`
      } id="updateAvatar"
    >
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close-button"
          type="button"
        />
        <form
          className="form"
          name={popupType}
          autoComplete="off"
          noValidate
          onSubmit={onSubmit}
        >
          <h2 className="form__title">{popupTitle}</h2>
          {children}
          <button
            className="form__submit-button"
            type="submit"
          >
            {submitText}
          </button>
        </form>
      </div>
    </div>
  )
}