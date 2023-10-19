const w = window.open()
w.document.body.innerHTML = "<h1>You can add HTML something like this</h1>"

const style = w.document.createElement("link")
link.href = "/path/to.css"
link.rel = "stylesheet"
w.document.head.appendChild(style)
