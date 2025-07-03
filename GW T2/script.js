document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault()
  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()
  if (!name || !email || !message) return alert("Please fill all fields")
  document.getElementById("formMessage").innerText = "Message sent successfully!"
  e.target.reset()
})

// Slider Logic
const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"]
let index = 0
const sliderImage = document.getElementById("sliderImage")

document.querySelector(".next").onclick = () => {
  index = (index + 1) % images.length
  sliderImage.src = images[index]
}
document.querySelector(".prev").onclick = () => {
  index = (index - 1 + images.length) % images.length
  sliderImage.src = images[index]
}

// Optional autoplay
setInterval(() => {
  index = (index + 1) % images.length
  sliderImage.src = images[index]
}, 4000)
