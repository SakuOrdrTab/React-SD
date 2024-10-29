import { useState } from 'react'
import './styles/App.css'
import PromptSettings from './components/PromptSettings'
import imageService from './services/imageService'
import SDImage from './components/SDImage'
import GenerateButton from './components/GenerateButton'

const App = () => {
  const [prompt, setPrompt] = useState('')
  const [negativePrompt, setNegativePrompt] = useState('')
  const [currentImage, setCurrentImage] = useState(null)
  
  const generateImage = async () => {
    console.log('Sending settings to service:generate.create')
    const resultingImage = await imageService.generateImage({ prompt, negativePrompt })
    setCurrentImage(resultingImage)
  }
  
  return (
    <div className='application'>
      <div className='app-box'>
        <h1>This is the stable diffusion App</h1>
        <p>
          Here comes the actual image <br />
          <SDImage image={currentImage}/>
        </p>
      </div>
      <div className='app-box'>
        <p>
          And here comes the other things: prompt, settings, etc
        </p>
        <PromptSettings prompt={prompt} setPrompt={setPrompt} negativePrompt={negativePrompt} setNegativePrompt={setNegativePrompt} />
        <GenerateButton onClick={generateImage} />
      </div>
    </div>
  )
}

export default App
