import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "sidebar", "infoBox" ]
  static values = { }

  toggle(){
    this.sidebarTarget.classList.toggle("open")
  }
  infoBoxToggle(){
    if (this.infoBoxTarget.style.display === "none") {
      this.infoBoxTarget.style.display = "block"
    } else {
      this.infoBoxTarget.style.display = "none"
    }
  }
}