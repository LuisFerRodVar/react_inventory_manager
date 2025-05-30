import './form.css'

export default function LoginForm() {
  return (
    <>
      <form className="form">
        <h1 className="form__title">Login</h1>
        <input type="email" className="form__input" placeholder="Email" />
        <input type="password" className="form__input" placeholder="Contraseña" />
        <a className="form__link">Recuperar contraseña</a>
        <button className="form__button">Ingresar</button>
      </form>
    </>
  )
}
