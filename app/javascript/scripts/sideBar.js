let sidebar = document.querySelector(".sidebar")
let handle = document.querySelector(".handle")
let handleBtn = document.querySelector(".handle-btn")

handleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open")
  BtnChange()
})

handle.addEventListener("mouseover", () => {
  sidebar.classList.toggle("open")
})

function BtnChange() {
  if (sidebar.classList.contains("open")) {
    handleBtn.classList.add("rotated")
  } else {
    handleBtn.classList.remove("rotated")
  }
}
