const products = [
  { id: 1, name: "Wireless Earbuds", price: 1200, image: "images/p1.jpg" },
  { id: 2, name: "Smart Watch", price: 2500, image: "images/p2.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 1500, image: "images/p3.jpg" }
]

let cart = []

function renderProducts() {
  const container = document.getElementById("products")
  products.forEach(p => {
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <input type="number" id="qty-${p.id}" placeholder="Qty" min="1">
      <button onclick="addToCart(${p.id})"><i class="fas fa-cart-plus"></i> Add</button>
    `
    container.appendChild(card)
  })
}

function addToCart(id) {
  const qty = parseInt(document.getElementById(`qty-${id}`).value)
  if (!qty || qty < 1) return alert("Enter valid quantity")

  const product = products.find(p => p.id === id)
  const existing = cart.find(i => i.id === id)

  if (existing) {
    existing.qty += qty
    existing.subtotal += product.price * qty
  } else {
    cart.push({ ...product, qty, subtotal: product.price * qty })
  }

  updateBill()
}

function updateBill() {
  const billBox = document.getElementById("bill-details")
  const grandBox = document.getElementById("grand-total")
  billBox.innerHTML = ""
  let total = 0

  cart.forEach(item => {
    billBox.innerHTML += `<p>${item.name} × ${item.qty} = ₹${item.subtotal}</p>`
    total += item.subtotal
  })

  const gst = total * 0.18
  const grand = total + gst

  grandBox.innerHTML = `
    <hr>
    <p>Subtotal: ₹${total.toFixed(2)}</p>
    <p>GST (18%): ₹${gst.toFixed(2)}</p>
    <p><strong>Grand Total: ₹${grand.toFixed(2)}</strong></p>
  `
}

renderProducts()
