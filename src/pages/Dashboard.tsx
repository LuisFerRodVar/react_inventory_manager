import NavAside from '../components/NavAside'
import Home from '../components/Home'
import Items from '../components/Items'
import { useState } from 'react'
import './dashboard.css'

export default function Dashboard(){
  const [route, setRoute] = useState("home")
  return (
    <>
      <main className="dashboard">
        <NavAside route = {route} setRoute = {setRoute} />
        {route === "home" && <section><Home /></section>}
        {route === "items" && <section><Items /></section>}
      </main>
    </>
  )
}
