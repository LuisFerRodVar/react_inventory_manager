import { useState } from 'react'
import { login } from '../api/usersApi.ts'
import './form.css'
import {useNavigate} from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      await login(email, password)
      navigate('/dashboard')

    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Login</h1>

      <input
        type="email"
        className="form__input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        className="form__input"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <a className="form__link" href="#">Recuperar contraseña</a>

      {error && <p className="form__error">{error}</p>}

      <button className="form__button" type="submit">Ingresar</button>
    </form>
  )
}

