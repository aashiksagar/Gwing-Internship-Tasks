const form = document.getElementById("form")
const messageEl = document.getElementById("formMessage")

form.addEventListener("submit", e => {
  e.preventDefault()
  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()

  if (!name || !email || !message) {
    messageEl.textContent = "Please fill all fields"
    messageEl.style.color = "red"
    return
  }

  messageEl.textContent = "Message submitted successfully!"
  messageEl.style.color = "green"
  form.reset()
})

// Slider logic
const images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"]
let index = 0
const slide = document.getElementById("slide")

document.querySelector(".next").onclick = () => {
  index = (index + 1) % images.length
  slide.src = images[index]
}

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + images.length) % images.length
  slide.src = images[index]
}

setInterval(() => {
  index = (index + 1) % images.length
  slide.src = images[index]
}, 5000)
