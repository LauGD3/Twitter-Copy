# Dependencies 👾

## MUI & MUI - Icons

MUI (Material UI) is the primary dependency of this project, and I’m using it to build all of the React components. I’ve been learning how to use this powerful tool as I code, referring to [the official documentacion:](https://mui.com/material-ui/getting-started/). Additionally, MUI offers another package called MUI - Icons, which provides an extensive library of icons available as React components, making it extremely useful for quickly adding icons to the application.

If for some reason i need to install other dependency, i'll put here explaining what it does.

# How to setup & run the project

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:
```bash
git clone https://github.com/LauGD3/Twitter-Copy.git
```
**3. Move to the Frontend folder:**
```bash
cd Frontend
```
**4. Install pnpm (Only if you dont have it):**
```bash
npm i pnpm@10.0.0
```
**5. Install dependencies:**
```bash
pnpm i
```
**6. Start the development server:**
```bash
pnpm run dev
```

# Run the project with Docker

Assuming you've already cloned the repository and installed dependencies, use these Docker commands:

**1. Build the image from the Dockerfile:**
```bash
docker build -t <tag> .
```
**`<tag>`** Here you can name the image whatever you want, this is great because you don't need to run a container with the ID.
*This will create an image that you can view by running docker images" in your terminal or using docker desktop*

**2. Run the image to create a container:**
```bash
docker run -p 8000:5173 <tag:v1>
```
**`<8000>`** Here you put the port that you want to use to run the proyect. **`<5173>`** Here, is the port that uses the container in this case, 5173, if you, for some reason need change this, go to [vite.config.ts](./vite.config.ts), and change the port in the object called "server". **`<tag:v1>`** This is the name of the container, you can call it whatever you want

**3. Run in developer mode (hot-reloading):** 
```bash
  docker run -p 8000:5173 -v $(pwd):/app <tag>
```

This third command will run the project, the difference is that any changes you make to the code will be shown to you.

# About the Twitter-chirp Font

This font family was created by Twitter and is proprietary, intended exclusively for use by the company's team. However, I came across an unofficial copy on GitHub. [Here is the repository:](https://github.com/edwardbetes/chirp-font).  