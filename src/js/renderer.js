const { dialog } = require('electron').remote;

document.getElementById('cppDownloaderDownload').addEventListener('click', () => {
  dialog.showSaveDialog({
    title: 'Save As',
    defaultPath: '/path/to/default/file.txt'
  }, (filename) => {
    if (filename) {
      // Do something with the selected file path
      console.log(`Selected file: ${filename}`);
    }
  });
});