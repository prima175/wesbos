const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
function webcam() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false }) //destructre
    .then((a) => {
      video.srcObject = a;
      video.play();
      console.log(a);
    });
}
webcam();
function webcamTocanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.height = height;
  canvas.width = width;
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 10);
} // scrollheight & videoheight & set interval
webcamTocanvas();
video.addEventListener("canplay", webcamTocanvas);

function takePhoto() {
  const data = canvas.toDataURL("image/jpeg");

  const link = document.createElement("a");
  link.href = data;
  link.textContent = "snapShot";
  link.innerHTML = `<img src = "${data}" alt = "handsome" />`;
  strip.insertBefore(link, strip.firstChild);
  console.log(link);
}
