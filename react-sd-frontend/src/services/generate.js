import axios from 'axios'
const baseUrl = '/api/generate'

const create = async (imageSettings) => {
    try {
        const response = await axios.post(baseUrl, imageSettings)
        return response.data
    } catch (error) {
        console.log('Error generating image: ', error.message)
    }
}


export default create