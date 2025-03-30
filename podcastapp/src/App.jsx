import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
  <>  
 < MovieCard movie = {{title:"Njabulo's film", release_date: "2024"}}/> 
 < MovieCard movie = {{title:"Mpumis's film", release_date: "2025 "}}/>
  </>
    
  )
}



export default App
