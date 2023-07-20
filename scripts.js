function searchVideos() {
  var input = document.getElementById("uuidInput").value;
  var videoElement = document.getElementById("videoPlayer");
  var videoSource = "/videos/" + input + "/video.mp4";
  // Check if the video exists
  var http = new XMLHttpRequest();
  http.open('HEAD', videoSource, false);
  http.send();
  if (http.status === 200) {
    videoElement.src = videoSource;
    videoElement.load();
    clearError();
    showDownloadButton(videoSource);
  } else {
    videoElement.src = ""; // Load an empty video source
    videoElement.load();
    displayError("Video not found");
    hideDownloadButton();
  }
}

function displayError(message) {
  var errorElement = document.getElementById("error");
  errorElement.innerHTML = message;
  errorElement.style.display = "block";
}

function clearError() {
  var errorElement = document.getElementById("error");
  errorElement.innerHTML = "";
  errorElement.style.display = "none";
}

function showDownloadButton(videoSource) {
  var downloadButton = document.getElementById("downloadButton");
  downloadButton.setAttribute("href", videoSource);
  downloadButton.style.display = "inline-block";
}

function hideDownloadButton() {
  var downloadButton = document.getElementById("downloadButton");
  downloadButton.removeAttribute("href");
  downloadButton.style.display = "none";
}

