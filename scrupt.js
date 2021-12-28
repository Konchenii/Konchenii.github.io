let btn = document.getElementById('reg-btn')
let video = document.getElementById('video-container')

console.log(btn)

btn.addEventListener('click', () => {
    if (video.style.display === "none") {
        video.style.display = "block";
    } else {
        video.style.display = "none";
    }
})

