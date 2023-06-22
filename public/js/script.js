let deleteBtns = document.querySelectorAll('#delete')
deleteBtns.forEach(deleteBtn => {
  deleteBtn.addEventListener('click', event => {
    const url = `/delete-user/${deleteBtn.dataset.delete}`
    fetch(url, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        window.location.href = data.redirect
      })
  })
})

const deleteAllUsersButton = document.querySelector('#deleteAllUsers')

deleteAllUsersButton.addEventListener('click', event => {
  const url = '/delete-all-users'
  fetch(url, { method: 'DELETE' })
    .then(response => response.json())
    .then(data => {
      window.location.href = data.redirect
    })
    .catch(error => console.log(error))
})
