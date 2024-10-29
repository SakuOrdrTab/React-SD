import '../styles/PromptSettings.css'

const PromptSettings = ({ prompt, setPrompt, negativePrompt, setNegativePrompt }) => {
    // console.log('Rendering PromptSettings component')

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


export default PromptSettings