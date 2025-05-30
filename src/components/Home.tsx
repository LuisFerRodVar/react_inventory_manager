import { useEffect, useState } from 'react'
import {getItemCount, getTotalPrice} from '../api/itemsApi'
import './home.css'

export default function Home() {
  const [itemCount, setItemCount] = useState<number | null>(null)
  const [totalPrice, setTotalPrice] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const count = await getItemCount()
        const price = await getTotalPrice()
        setItemCount(count)
        setTotalPrice(price)
      } catch (err: any) {
        setError(err.message || 'Error fetching data')
      }
    }

    fetchData()
  }, [])

  return (
    <main className="home">
      <h1 className="home__title">Inventario</h1>

      {error && <p className="home__error">{error}</p>}

      <ul className="home__boxs">
        <li className="home__item">
          <h2 className="item__title">Total de items</h2>
          <p className="item__text">
            {itemCount !== null ? itemCount : 'Loading...'}
          </p>
        </li>
        <li className="home__item">
          <h2 className="item__title">Precio total</h2>
          <p className="item__text">
            {totalPrice !== null ? `$${totalPrice}` : 'Loading...'}
          </p>
        </li>
      </ul>
    </main>
  )
}

