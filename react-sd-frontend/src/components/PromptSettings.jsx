import '../styles/PromptSettings.css'
import PropTypes from 'prop-types'

const PromptSettings = ({ prompt, setPrompt, negativePrompt, setNegativePrompt }) => {
    console.log('Rendering PromptSettings component')

    return (
        <div>
        <div>
            <p>
            Prompt:<br />
            <textarea className="wide-textarea"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)} // Update state with the input value
                placeholder="Type something..."
                rows={3}
                />
            </p>
        </div>
        <div>
            <p>
            Negative Prompt:<br />
            <textarea className="wide-textarea"
            value={negativePrompt}
            onChange={(e) => setNegativePrompt(e.target.value)} // Update state with the input value
            placeholder="Type something..."
            rows={3}
            />
            </p>
        </div>
        </div>
    )
}

PromptSettings.propTypes = {
    prompt : PropTypes.string,
    setPrompt : PropTypes.func.isRequired,
    negativePrompt : PropTypes.string,
    setNegativePrompt : PropTypes.func.isRequired
}

export default PromptSettings