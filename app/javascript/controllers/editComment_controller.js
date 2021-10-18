import { Controller } from "stimulus"
import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = ["text", "hide"]
  static values = { id: Number }

  edit(e) {
    e.preventDefault()
    const origin = this.textTarget.innerText
    const textarea = document.createElement("textarea")
    this.textTarget.replaceWith(textarea)
    textarea.innerText = origin
    // replaceWith 完，屬性會消失，須重新添加
    textarea.setAttribute("data-action", "keydown->editComment#pressEnter")
    textarea.setAttribute("data-editComment-target", "text")
    textarea.focus()
    // 輸入位置從起始移到最後
    const val = textarea.value
    textarea.value = ""
    textarea.value = val
    // 點完enter隱藏編輯、刪除鍵
    this.hideTarget.style.display = "none"
  }

  pressEnter(e) {
    if (e.key === "Enter") {
      const url = `/api/v1/comments/${this.idValue}/edit_comment?comment[content]=${this.textTarget.value}`
      Rails.ajax({
        type: "post",
        url,
        success: () => {
          const edited = this.textTarget.value
          const previous = document.createElement("div")
          this.textTarget.replaceWith(previous)
          previous.innerText = edited
          previous.setAttribute("data-editComment-target", "text")
        },
        error: function (err) {
          console.log(err)
        },
      })
    }
  }
}
