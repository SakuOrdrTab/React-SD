import '../styles/PromptSettings.css'
import Slider from '@mui/material/Slider'

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
        
            <div>
                <p>
                Guidance Scale:<br />
                <Slider className="guidance-slider"
                    value={imageSettings.guidanceScale || 7.0}
                    onChange={(e, newValue) =>
                    setImageSettings({ ...imageSettings, guidanceScale: newValue })
                    }
                    min={0}
                    max={20}
                    step={0.1}
                    valueLabelDisplay="on"
                />
                </p>
            </div>
        </div>
    )
}

export default PromptSettings