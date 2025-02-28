document.getElementById('sendButton').addEventListener('click', () => {
    console.log('Sending message to Main Process...');
    window.electron.sendMessage('Hello from Renderer!');
});

window.electron.onMessage((response) => {
    console.log('Response from Main Process:', response);
    document.getElementById('output').innerText = response;
});
