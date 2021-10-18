import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "display", "btn" ]
  toggle() {
    if (this.displayTarget.style.display === "none") {
      this.displayTarget.style.display = "block"
    } else {
      this.displayTarget.style.display = "none"
    }
  }
  hide(e) {
    e.preventDefault()
    this.displayTarget.style.display = "none"
  }
}
