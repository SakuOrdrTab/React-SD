import { useState } from 'react'
import './styles/App.css'
import PromptSettings from './components/PromptSettings'
import imageService from './services/imageService'
import SDImage from './components/SDImage'
import GenerateButton from './components/GenerateButton'
import BlockPage from './components/BlockPage'

const App = () => {
  const [imageSettings, setImageSettings] = useState({
    prompt: '',
    negativePrompt: '',
  })

  const [currentImage, setCurrentImage] = useState(null)
  
  const generateImage = async () => {
    // console.log('Sending settings to service:generate.create')
    const result = await imageService.generateImage({ imageSettings })
    if (result && result.images) {
      // console.log('Got a result and result.images, setting image')
      setCurrentImage(result.images)
    } else {
      console.error('No images received from the backend.')
    }
  }

  return (
    <div className='application'>
      <BlockPage>
        <h1>Stable diffusion 3</h1>
        <SDImage images={currentImage}/>
      </BlockPage>
      <BlockPage>
        <p>
        Enter a prompt describing what you want to generate a picture about.<br />
        Negative prompt describes, what you <b>don&apos;t</b> want to see in the image.<br />
        <br></br>
        </p>
        <PromptSettings imageSettings={imageSettings} setImageSettings={setImageSettings} />
        <GenerateButton onClick={generateImage} />
      </BlockPage>
    </div>
  )
}

export default App
