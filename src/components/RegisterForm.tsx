import './form.css'

export default function RegisterForm(){
  return (
    <>
      <form className="form">
        <h1 className="form__title">Registro</h1>
        <input type="email" className="form__input" placeholder="Email" />
        <input type="password" className="form__input" placeholder="Contraseña" />
        <input type="password" className="form__input" placeholder="Repetir contraseña" />
        <button className="form__button">Registrar</button>
      </form>
    </>
  )
}
