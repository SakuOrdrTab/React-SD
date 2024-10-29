import axios from 'axios'
const baseUrl = '/api/generate'

const generateImage = async (imageSettings) => {
    console.log('Inside ganerate service, creating image')
    try {
        const response = await axios.post(baseUrl, imageSettings)
        console.log('response:', response)
        return response.data
    } catch (error) {
        console.log('Error generating image: ', error.message)
    }
}

export default { generateImage }