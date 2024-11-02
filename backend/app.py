"""Main python backend script for creating stable diffusion images"""
import base64
import io
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from sdcreator import SDCreator

# app = Flask(__name__)
app = Flask(__name__, static_folder='dist', static_url_path='')

CORS(app)  # Enable Cross-Origin Resource Sharing

# Initialize the SDCreator once when the app starts
creator = SDCreator()

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/generate', methods=['POST'])
def generate_image():
    """
    Handle POST requests to the /api/generate endpoint to generate images based on provided prompts.
    This function extracts parameters from the incoming JSON request, uses the SDCreator to generate
    images, converts the generated images to base64 strings, and returns a JSON response containing
    the images and prompts.
    Returns:
        Response: A JSON response containing the generated images and the prompts used.
    """
    print('Got a post to /api/generate!')
    data = request.get_json()
    print(data)

    # Extract imagesettings
    image_settings = data.get('imageSettings', {})

    prompt = image_settings.get('prompt', '')
    print("Found prompt: ", prompt)
    
    negative_prompt = image_settings.get('negativePrompt', '')
    print("Found negative prompt: ", negative_prompt)
    num_inference_steps = image_settings.get('numInferenceSteps', 28)
    print("Found inference steps: ", num_inference_steps)

    height = image_settings.get('height', 512)
    print("Found height: ", height)
    width = image_settings.get('width', 512)
    print("Found width: ", width)
    guidance_scale = image_settings.get('guidanceScale', 7.0)
    print('Found guidance scale: ', guidance_scale)
    num_images_per_prompt = image_settings.get('numImagesPerPrompt', 1)
    print('Found num images per prompt: ', num_images_per_prompt)

    # Generate images using SDCreator
    print('Starting creator.create')
    output = creator.create(
        prompt=prompt,
        negative_prompt=negative_prompt,
        num_inference_steps=num_inference_steps,
        # height=height,
        # width=width,
        guidance_scale=guidance_scale,
        # num_images_per_prompt=num_images_per_prompt
    )
    print('backend got a return value from SCCreator')
    images = output.images

    # Convert images to base64 strings
    image_strings = []
    for image in images:
        buffered = io.BytesIO()
        image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')
        image_strings.append(img_str)

    # Prepare the response
    response = {
        'images': image_strings,
        'prompt': prompt,
        'negative_prompt': negative_prompt,
        # Add other attributes if needed
    }

    print('Now sending the response')

    return jsonify(response)

# Catch-all route for SPA
@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
