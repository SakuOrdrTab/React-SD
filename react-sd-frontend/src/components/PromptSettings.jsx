import '../styles/PromptSettings.css'

const PromptSettings = ({ imageSettings, setImageSettings }) => {
    return (
        <div>
            <div>
                <p>
                Prompt:<br />
                <textarea className="wide-textarea"
                    value={imageSettings.prompt}
                    onChange={(e) => setImageSettings({ ...imageSettings, prompt : e.target.value })} // Update state with the input value
                    placeholder="Type something..."
                    rows={3}
                    />
                </p>
            </div>
            <div>
                <p>
                Negative Prompt:<br />
                <textarea className="wide-textarea"
                value={imageSettings.negativePrompt}
                onChange={(e) => setImageSettings({ ...imageSettings, negativePrompt : e.target.value })} // Update state with the input value
                placeholder=""
                rows={3}
                />
                </p>
            </div>
        </div>
    )
}


export default PromptSettings