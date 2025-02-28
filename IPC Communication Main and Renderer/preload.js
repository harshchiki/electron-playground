const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    sendMessage: (msg) => ipcRenderer.send('renderer-to-main', msg),
    onMessage: (callback) => ipcRenderer.on('main-to-renderer', (event, response) => callback(response)),
});
