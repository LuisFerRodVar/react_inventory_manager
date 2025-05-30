import './NavAside.css'

interface Props {
  route: string;
  setRoute: Function;
}

export default function NavAside({route, setRoute} : Props){
  return (
    <>
      <aside className="aside">
        <h1 className="aside__title">CRUD</h1>
        {route === "home" && <a className="active aside__link">Inicio</a>}
        {route !== "home" && <a onClick={() => setRoute("home")} className="aside__link">Inicio</a>}
        {route === "items" && <a className="active aside__link">Productos</a>}
        {route !== "items" && <a onClick={() => setRoute("items")} className="aside__link">Productos</a>}
      </aside>
    </>
  )
}
