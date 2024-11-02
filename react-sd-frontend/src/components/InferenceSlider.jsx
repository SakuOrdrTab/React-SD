import '../styles/InferenceSlider.css'
import Slider from '@mui/material/Slider'

const InferenceSlider = ({ imageSettings, setImageSettings }) => {
    return (
    <div>
        Inference steps:<br />
        <div>
            <Slider className="inference-slider"
                sx={{ width: '75%' }}
                value={imageSettings.numInferenceSteps || 27}
                onChange={(e, newValue) =>
                setImageSettings({ ...imageSettings, numInferenceSteps: newValue })
                }
                min={0}
                max={100}
                step={1}
                valueLabelDisplay="on"
            />
        </div>
    </div>
)}

export default InferenceSlider