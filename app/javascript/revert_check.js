function revertCheck() {
  const checkButtons = document.querySelectorAll('.article-check-button')

  checkButtons.forEach(checkButton => {
    checkButton.addEventListener('click', () => {
      const revertConfirm = window.confirm('記事を未読状態に戻しますか？')
      if (revertConfirm) {
        const id = checkButton.getAttribute('data')
        const XHR = new XMLHttpRequest()
        XHR.open("GET", `/checks/revert/${id}`, true)
        XHR.send()
        XHR.onload = () => {
          checkButton.remove()
        }
      } else {
        ;
      }
    })
  })
}

window.addEventListener('load', revertCheck)