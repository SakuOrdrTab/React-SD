"""Module providing functionality to create stable diffusion images"""

import torch
from diffusers import StableDiffusion3Pipeline

class SDCreator():
    """A Class wchich provides methods to create stable diffusion images"""
    def __init__(self, model="stabilityai/stable-diffusion-3-medium-diffusers"):
        """
        Initializes the StableDiffusion3Pipeline with the specified model.
        Args:
            model (str): The model identifier for the Stable Diffusion pipeline. 
                         Defaults to "stabilityai/stable-diffusion-3-medium-diffusers".
        """
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
        """
        Generates images based on the given prompt and parameters.

        Args:
            prompt (str): The main prompt to guide the image generation.
            negative_prompt (str, optional): A prompt to guide what should not be in the image. Defaults to "".
            num_inference_steps (int, optional): The number of inference steps for the generation process. Defaults to 28.
            height (int, optional): The height of the generated image in pixels. Defaults to 1024.
            width (int, optional): The width of the generated image in pixels. Defaults to 1024.
            guidance_scale (float, optional): The scale for guidance during generation. Defaults to 7.0.
            num_images_per_prompt (int, optional): The number of images to generate per prompt. Defaults to 1.

        Returns:
            Generated images based on the provided parameters.
            """
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
