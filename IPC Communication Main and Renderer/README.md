# Run the project
> npm start

# Project Structure
index.html (Basic UI)
main.js (Main Process)
    This file creates the app window and listens for messages from the Renderer.
preload.js (Bridge between Renderer and Main)
    This file exposes ipcRenderer methods securely to the Renderer.
renderer.js (Renderer Process)
    This file sends a message to the Main Process and handles the response.
styles.css (Just for Styling)
    This is optional, but it makes the UI look better.