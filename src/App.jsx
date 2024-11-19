import { useState } from "react"
function App() {
  const [color,setColor]= useState('olive');
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button 
          style={{backgroundColor : 'red'}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('red')}>Red</button>

          <button 
          style={{backgroundColor : 'blue'}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('blue')}>Blue</button>
          <button 
          style={{backgroundColor : 'green'}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('green')}>Green</button>
          <button 
          style={{backgroundColor : 'olive'}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('olive')}>Olive</button>
          <button 
          style={{backgroundColor : 'gray'}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('gray')}>Gray</button>
          <button 
          style={{backgroundColor : 'yellow'}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          onClick={() => setColor('yellow')}>Yellow</button>
          <button 
          style={{backgroundColor : 'Pink'}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('Pink')}>Pink</button>
          <button 
          style={{backgroundColor : 'Purple'}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('Purple')}>Purple</button>
          <button 
          style={{backgroundColor : 'Lavender'}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          onClick={() => setColor('Lavender')}>Lavender</button>
          <button 
          style={{backgroundColor : 'White'}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          onClick={() => setColor('White')}>White</button>
          <button 
          style={{backgroundColor : 'Black'}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('Black')}>Black</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
