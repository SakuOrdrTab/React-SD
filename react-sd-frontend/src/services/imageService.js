import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/generate'

const generateImage = async (imageSettings) => {
    console.log('Inside ganerate service, creating image')
    try {
        const response = await axios.post(baseUrl, imageSettings)
        console.log('response.data:', response.data)
        return response.data
    } catch (error) {
        console.log('Error generating image: ', error.message)
    }
}

export default { generateImage }