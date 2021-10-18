import { Controller } from "stimulus";
import ax from "lib/http/ax";

export default class extends Controller {
  static targets = [ "icon", "counter" ];
  static values = { id: Number };

  addFavorite(e) {
    e.preventDefault();
    const url = `/api/v1/notes/${this.idValue}/favorite`;
    let counter = Number(this.counterTarget.innerText)
    ax.post(url)
      .then((res) => {
        const icon = this.iconTarget;
        if (res.data.status === "added") {
          if (icon.classList.value === "fa-heart favorite_icon text-sm far"){
            this.counterTarget.innerText = counter + 1
            icon.classList.remove("far");
            icon.classList.add("fas");
          } else {
            this.counterTarget.innerText = counter - 1
            icon.classList.remove("fas");
            icon.classList.add("far");
          }
        } else {
          if (res.data.status === "removed" && counter > 0){
            if (icon.classList.value === "fa-heart favorite_icon text-sm far") {  
              this.counterTarget.innerText = counter + 1
              icon.classList.remove("far");
              icon.classList.add("fas");
            } else {
              this.counterTarget.innerText = counter - 1
              icon.classList.remove("fas");
              icon.classList.add("far")
            }
          } else {
            if (icon.classList.value === "fa-heart favorite_icon text-sm fas") {  
              this.counterTarget.innerText = counter
              icon.classList.remove("fas");
              icon.classList.add("far") 
            } else {
              this.counterTarget.innerText = counter + 2
              icon.classList.remove("far");
              icon.classList.add("fas");
            }
          }
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }
}
