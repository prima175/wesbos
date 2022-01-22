const players = document.querySelector(".player");
const video = document.querySelector(".player__video");
const control = document.querySelector(".player__controls");
const progress1 = document.querySelector(".progress__filled");
const progress2 = document.querySelector(".progress");

const button = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("button[data-skip] ");
const sliders = document.querySelectorAll(".player__slider");
console.log({ players, control, progress1, progress2, button, sliders });
console.log({ video });

//console.log({ data });

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = video.paused ? "►" : "❚ ❚";
  button.textContent = icon;
}

function skip() {
  video.currentTime = video.currentTime + parseFloat(this.dataset.skip);
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress1.style.flexBasis = `${percent}%`;
  //progress2.style.flexBasis = `${percent}%`;
}
function progressX(e) {
  const percentTime = (e.offsetX / video.offsetWidth) * video.duration;
  video.currentTime = percentTime;
}

function updateVolumePlayback(e) {
  console.log(this.value, this.name, this);
  video[this.name] = this.value;
  //video.playbackRate = this.value;
}

video.addEventListener("click", togglePlay);

button.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
skipButtons.forEach((skipButton) => skipButton.addEventListener("click", skip));

video.addEventListener("timeupdate", handleProgress);
progress2.addEventListener("click", progressX);
progress2.addEventListener("mousemove", progressX);
sliders.forEach((slider) =>
  slider.addEventListener("click", updateVolumePlayback)
);
