import { useState } from 'react'
import {register } from '../api/usersApi'
import './form.css'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (password !== passwordRepeat) {
      setError('Passwords do not match')
      return
    }

    try {
      await register(email, password)
      setSuccess('User registered successfully!')
      setEmail('')
      setPassword('')
      setPasswordRepeat('')

    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Registro</h1>

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

      <input
        type="password"
        className="form__input"
        placeholder="Repetir contraseña"
        value={passwordRepeat}
        onChange={(e) => setPasswordRepeat(e.target.value)}
        required
      />

      {error && <p className="form__error">{error}</p>}
      {success && <p className="form__success">{success}</p>}

      <button className="form__button" type="submit">Registrar</button>
    </form>
  )
}
