import torch
from diffusers import StableDiffusion3Pipeline

class SDCreator():

    def __init__(self, model="stabilityai/stable-diffusion-3-medium-diffusers"):
        self._pipe = StableDiffusion3Pipeline.from_pretrained(
            model,
            text_encoder_3=None, 
            tokenizer_3=None, 
            torch_dtype=torch.float16
        )
        self._pipe.to("cuda")

    def create(self,
               prompt : str,
               negative_prompt : str = "",
               num_inference_steps : int =28,
               height : int = 1024,
               width : int = 1024,
               guidance_scale : float = 7.0,
               num_images_per_prompt : int = 1):
        return self._pipe(
            prompt=prompt,
            negative_prompt=negative_prompt,
            num_inference_steps=num_inference_steps,
            height=height,
            width=width,
            guidance_scale=guidance_scale,
            num_images_per_prompt=num_images_per_prompt)
    
if __name__ == "__main__":
    from PIL import Image
    creator = SDCreator()
    images = creator.create(prompt="A white raven, photorealistic").images
    for image in images:
        image.show()
