import { useState } from 'react'
import './styles/App.css'

const App = () => {
  console.log('Inside App!')
  const [prompt, setPrompt] = useState('')
  const [negativePrompt, setNegativePrompt] = useState('')
  return (
    <div className='application'>
      <h1>This is the stable diffusion App</h1>
      <div className='app-box'>
        <p>
          Here comes the actual Image
        </p>
      </div>
      <div className='app-box'>
        <p>
          And here comes the other things: prompt, settings, etc
        </p>
      </div>
    </div>
  )
}

export default App
