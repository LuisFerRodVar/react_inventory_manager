import NavAside from '../components/NavAside'
import Home from '../components/Home'
import Items from '../components/Items'
import { useState } from 'react'

export default function Dashboard(){
  const [route, setRoute] = useState("home")
  return (
    <>
      <main className="dashboard">
        <NavAside route = {route} setRoute = {setRoute} />
        {route === "home" && <Home />}
        {route === "items" && <Items />}
      </main>
    </>
  )
}
