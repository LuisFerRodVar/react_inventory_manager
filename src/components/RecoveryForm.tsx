import './form.css'

export default function RecoveryForm(){
  return (
    <>
      <form className="form">
        <h1 className="form__title">Recuperar contraseña</h1>
        <input type="email" className="form__input" placeholder="Email" />
        <button className="form__button">Enviar</button>
      </form>
    </>
  )
}
