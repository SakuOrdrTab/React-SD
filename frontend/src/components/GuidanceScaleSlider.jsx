import '../styles/GuidanceScaleSlider.css'
import Slider from '@mui/material/Slider'

const GuidanceScaleSlider = ({ imageSettings, setImageSettings }) => {
    return (
    <div>
        Guidance Scale:<br />
        <div>
            <Slider className="guidance-slider"
                sx={{ width: '75%' }}
                value={imageSettings.guidanceScale || 7.0}
                onChange={(e, newValue) =>
                setImageSettings({ ...imageSettings, guidanceScale: newValue })
                }
                min={0}
                max={20}
                step={0.1}
                valueLabelDisplay="on"
            />
        </div>
    </div>
)}

export default GuidanceScaleSlider