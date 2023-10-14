import './App.css'
import AndreaPerez from './components/AndreaPerez'
import BrayanGonzales from './components/BrayanGonzales'
import DianaRios from './components/DianaRios'
import FranklinDeJesus from './components/FranklinDeJesus'
import FrednerysMora from './components/FrednerysMora'
import HayderArenas from './components/HayderArenas'
import JosephAntony from './components/JosephAntony'
import JuanDavid from './components/JuanDavid'
import JuniorPacheco from './components/JuniorPacheco'

function App() {

  return (
    <main className='bg-black min-h-screen text-white text-center'>
      <h1 className='text-xl font-semibold'>Practica Grupal git</h1>
      <h3>Integrantes:</h3>
      <JuniorPacheco />
      <AndreaPerez />
      <BrayanGonzales />
      <DianaRios />
      <FranklinDeJesus />
      <FrednerysMora />
      <HayderArenas />
      <JosephAntony />
      <JuanDavid />
    </main>
  )
}

export default App
