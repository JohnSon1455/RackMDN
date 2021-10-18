import React from "react"
import ReactDOM from "react-dom"
import MarkdownEditor from "@uiw/react-markdown-editor"

const title2 = {
  name: "title2",
  keyCommand: "title2",
  icon: (
    <svg width="12" height="12" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M496 80V48c0-8.837-7.163-16-16-16H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.621v128H154.379V96H192c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.275v320H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.621V288H357.62v128H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.275V96H480c8.837 0 16-7.163 16-16z"
      />
    </svg>
  ),
  execute: (editor, selection, position) => {
    const value = selection ? `## ${selection}` : "## "
    editor.replaceSelection(value)
    position.ch = !!selection ? position.ch : position.ch + 3
    editor.setCursor(position.line, position.ch)
    editor.focus()
  },
}

const Dome = () => {
  const content = document.querySelector("#editor").dataset.content
  const text = content.replace(/,/g, " \n")
  return (
    <MarkdownEditor
      value= {text}
      toolbars={[
        "bold",
        "italic",
        "strike",
        "header",
        "code",
        "quote",
        "olist",
        "ulist",
        "todo",
        "link",
        "image",
      ]}
      visible="true" 
      styleActiveLine= "true"
    />
  )
}

document.addEventListener("turbolinks:load", () => {
  var show = document.getElementById('editor')
  if ( show ) {
    ReactDOM.render(<Dome />, show);
  }
})
