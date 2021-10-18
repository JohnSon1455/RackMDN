import { Controller } from "stimulus"
import axios from "axios"



export default class extends Controller {
  static targets = [ "icon" ]
  static values = { id: Number }

  addCollection(e){
    e.preventDefault();
    const url = `/api/v1/notes/${this.idValue}/collection`;
    const csrfToken = document.querySelector("meta[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;

    axios.post(url)
    .then((res) => {
    const icon = this.iconTarget;
    if (res.data.status === "added") {
      icon.classList.remove("far")
      icon.classList.add("fas")
    } else {
      icon.classList.remove("fas")
      icon.classList.add("far")
      }
    })
    .catch((err) => {
      console.log(err)
    });
  };
};