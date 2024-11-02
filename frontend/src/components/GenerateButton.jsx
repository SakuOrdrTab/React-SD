import '../styles/GenerateButton.css'

const GenerateButton = ({ onClick }) => {
    return (
      <button className='generate-button' onClick={onClick} >Generate</button>
    )
  }

export default GenerateButton