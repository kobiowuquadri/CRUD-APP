const express = require('express')
const router = express.Router()
const {
  getForm,
  getSingleUser,
  formSubmission,
  deleteUser,
  getUpdateForm,
  updateForm,
  deleteAllUsers,
  aboutPage
} = require('.././controllers/userController')

//form
router.get('/form', getForm)

// single view
router.get('/single-user/:id', getSingleUser)

// form submit
router.post('/submit', formSubmission)

// about page
router.get('/about', aboutPage)

// delete

router.delete('/delete-user/:id', deleteUser)

// update form
router.get('/form-update/:id', getUpdateForm)

// update
router.put('/update-user/:id', updateForm)

// delete all user
router.delete('/delete-all-users', deleteAllUsers)

module.exports = router
