import { Controller } from "stimulus"
import axios from "axios"

export default class extends Controller {
  static targets = ["box", "filter"]

  toggle() {
    if (this.boxTarget.style.display == "none") {
      this.boxTarget.style.display = "block"
    } else {
      this.boxTarget.style.display = "none"
    }
  }

  search() {
    const tags = document.getElementsByName("tag")
    const checkedTags = []
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].checked) {
        checkedTags.push(tags[i].value)
      }
    }
    let data = { tag_str: checkedTags.toString() }

    axios
      .post(`/api/v1/notes/tag_filter`, data)
      .then((res) => {
        const { note, tagging } = res.data
        let postIds = {}

        checkedTags.forEach((tag) => {
          tagging.forEach((item) => {
            if (item.tag_id === Number(tag)) {
              if (postIds[item.note_id]) return
              postIds[item.note_id] = true
            }
          })
        })

        const noteId = Object.keys(postIds)

        const newNotes = note.filter((note) => {
          for (var i = 0; i < noteId.length; i++) {
            if (note.id === Number(noteId[i])) {
              return note
            }
          }
        })

        this.createNotes(newNotes)
      })
      .catch((error) => console.log(error))
  }

  createNotes(notes) {
    this.filterTarget.textContent = ""
    const noteTem = document.getElementById("filterNote")
    const title = noteTem.content.querySelector(".noteTitle")

    notes.forEach((item) => {
      title.textContent = item.title
      title.href = `/notes/${item.id}`

      const clone = document.importNode(noteTem.content, true)
      this.filterTarget.append(clone)
    })
  }
}
