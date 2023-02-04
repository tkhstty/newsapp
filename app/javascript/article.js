function shadow() {
  const articles = document.querySelectorAll('.article')

  articles.forEach(article => {
    article.addEventListener('mouseover', () => {
      article.setAttribute("style", "box-shadow: 0px 5px 5px 5px gray;")
    })
    article.addEventListener('mouseout', () => {
      article.removeAttribute("style", "box-shadow: 0px 5px 5px 5px gray;")
    })
  })
}

window.addEventListener('load', shadow)