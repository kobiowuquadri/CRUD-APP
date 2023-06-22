const userModel = require('../models/userModel')

const getForm = (req, res) => {
    res.render('form', {title : 'Form Page'})
}

const getSingleUser = async (req, res) => {
    const id = req.params.id
    await userModel.findById(id)
    .then(result => {
        res.render('single-view', {title: 'Single user', result})
    })
    .catch(error => console.log(error))
}

const aboutPage = (req, res) => {
    res.render('about', {title: 'About Page'})
}

const formSubmission = (req, res) => {
    const data = req.body
    const newData = new userModel(data)
     newData.save()
    .then(result => {
     console.log(result)
     res.redirect('/')
 })
    .catch(error => console.log(error)) 
 }

const deleteUser = async (req, res)=> {
    const id = req.params.id
    await userModel.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/'})
    })
    .catch(error => console.log(error))
}

const getUpdateForm = async (req, res)=> {
    const id = req.params.id
    await userModel.findById(id)
    .then(result => {
        res.render('form-update', {title: 'Update Form Page', result})
    })
    .catch(error => console.log(error))
}

const updateForm = async (req, res) => {
    const id = req.params.id
    await userModel.findByIdAndUpdate(id, req.body)
    .then(result => {
        res.redirect('/')
    })
    .catch(error => console.log(error))
}


const deleteAllUsers = async (req, res) => {
    await userModel.deleteMany()
    .then(result => {
        res.json({redirect: '/'})
    })
    .catch(error => console.log(error))
}

module.exports = {getForm, getSingleUser, formSubmission,  deleteUser, getUpdateForm, updateForm, deleteAllUsers, aboutPage}