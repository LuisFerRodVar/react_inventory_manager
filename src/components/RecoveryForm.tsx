import { useState } from 'react'
import {recover } from '../api/usersApi'
import './form.css'

export default function RecoveryForm() {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email || !newPassword) {
      setError('Please fill in all fields')
      return
    }

    try {
      await recover(email, newPassword)
      setSuccess('Password recovery successful!')

      setEmail('')
      setNewPassword('')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Recuperar contraseña</h1>

      <input
        type="email"
        className="form__input"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        className="form__input"
        placeholder="Nueva contraseña"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        required
      />

      {error && <p className="form__error">{error}</p>}
      {success && <p className="form__success">{success}</p>}

      <button className="form__button" type="submit">Enviar</button>
    </form>
  )
}

