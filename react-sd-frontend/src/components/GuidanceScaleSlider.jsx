import '../styles/GuidanceScaleSlider.css'
import Slider from '@mui/material/Slider'

const GuidanceScaleSlider = ({ imageSettings, setImageSettings }) => {
    return (
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
)}

export default GuidanceScaleSlider