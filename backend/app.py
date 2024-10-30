from flask import Flask, request, jsonify
from flask_cors import CORS
from sdcreator import SDCreator
import io
import base64

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Initialize the SDCreator once when the app starts
creator = SDCreator()

@app.route('/api/generate', methods=['POST'])
def generate_image():
    print('Got a post to /api/generate!')
    data = request.get_json()

    # Extract parameters from the request
    prompt = data.get('prompt', '')
    negative_prompt = data.get('negativePrompt', '')
    # num_inference_steps = data.get('num_inference_steps', 28)
    # height = data.get('height', 512)
    # width = data.get('width', 512)
    # guidance_scale = data.get('guidance_scale', 7.0)
    # num_images_per_prompt = data.get('num_images_per_prompt', 1)

    # Generate images using SDCreator
    print('Starting creator.create')
    output = creator.create(
        prompt=prompt,
        negative_prompt=negative_prompt,
        # num_inference_steps=num_inference_steps,
        # height=height,
        # width=width,
        # guidance_scale=guidance_scale,
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

if __name__ == '__main__':
    app.run(debug=True, port=5000)
