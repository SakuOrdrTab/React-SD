# React-SD

A little react project for experimenting react-python integration

<img src=".\docs\architecture.drawio.svg">

## info

This is just a little experiment exploring integrating python flask backend with react frontend.

The stable diffusion part is nothing fancy, the idea was just to experiment with python and JS full stack. If you are seriously doing stable diffusion, clone https://github.com/AUTOMATIC1111/stable-diffusion-webui or https://github.com/comfyanonymous/ComfyUI

## Installation

the python backend needs the virtual environment. Go to the backend folder, install requirements in the `requirements.txt` and I strongly suggest installing pytorch separately as it can be a bit tricky. Note that I used an older pytorch, the new version worked very slow in my system.

For the frontend, just run npm install in the frontend directory.

If you want to run frontend as static from the backend, there is a build script in the package.json. I configured a vite server, so running dev servers in the both servers should do fine.
