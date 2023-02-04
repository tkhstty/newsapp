function menu() {
  const menu1 = document.getElementById('menu1')
  const list1 = document.getElementById('menu1-pull-down')

  menu1.addEventListener('mouseover', () => {
    menu1.setAttribute("style", "background-color: orange;")
  })
  menu1.addEventListener('mouseout', () => {
    menu1.removeAttribute("style", "background-color: orange;")
  })
  
  menu1.addEventListener('click', () => {
    if (list1.getAttribute("style") == "display: block;") {
      list1.removeAttribute("style", "display: block;")
    } else {
      list1.setAttribute("style", "display: block;")
    }
  })
}

window.addEventListener('load', menu)