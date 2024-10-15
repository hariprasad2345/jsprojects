const video = document.getElementById('video');
const startScreenCaptureButton = document.getElementById('startScreenCapture');
const pipButton = document.getElementById('pipButton');
async function startScreenCapture() {
  try {
  const stream = await navigator.mediaDevices.getDisplayMedia({});
    video.srcObject = stream;
    pipButton.disabled = false; 
  } catch (error) {
    console.error('Error capturing screen:', error);
  }
}
async function enterPictureInPicture() {
  try {
   
    if (video !== document.pictureInPictureElement) {
      await video.requestPictureInPicture();
    } else {
      await document.exitPictureInPicture();
    }
  } catch (error) {
    console.error('Error with Picture-in-Picture:', error);
  }
}

startScreenCaptureButton.addEventListener('click', startScreenCapture);
pipButton.addEventListener('click', enterPictureInPicture);

video.addEventListener('leavepictureinpicture', () => {
  pipButton.disabled = true;
});
