import './home.css'

export default function Home(){
  return (
    <>
      <main className="home">
        <h1 className="home__title">Inventario</h1>
        <ul className="home__boxs">
          <li className="home__item">
            <h2 className="item__title">Total de items</h2>
            <p className="item__text"></p>
          </li>
          <li className="home__item">
            <h2 className="item__title">Precio total</h2>
            <p className="item__text"></p>
          </li>
        </ul>
      </main>
    </>
  )
}

