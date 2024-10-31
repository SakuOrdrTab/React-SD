import { useState } from 'react'
import './styles/App.css'
import PromptSettings from './components/PromptSettings'
import imageService from './services/imageService'
import SDImage from './components/SDImage'
import GenerateButton from './components/GenerateButton'

const App = () => {
  const [imageSettings, setImageSettings] = useState({
    prompt: '',
    negativePrompt: '',
  })

  const [currentImage, setCurrentImage] = useState(null)
  
  const generateImage = async () => {
    console.log('Sending settings to service:generate.create')
    const result = await imageService.generateImage({ imageSettings })
    if (result && result.images) {
      console.log('Got a result and result.images, setting image')
      setCurrentImage(result.images)
    } else {
      console.error('No images received from the backend.')
    }
  }

  return (
    <div className='application'>
      <div className='app-box'>
        <h1>This is the stable diffusion App</h1>
          Here comes the actual image <br />
          <SDImage images={currentImage}/>
      </div>
      <div className='app-box'>
        <p>
          And here comes the other things: prompt, settings, etc
        </p>
        <PromptSettings imageSettings={imageSettings} setImageSettings={setImageSettings} />
        <GenerateButton onClick={generateImage} />
      </div>
    </div>
  )
}

export default App
