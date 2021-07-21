const { response } = require('express')
const User = require('../models/Users')

const index = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message: "An error occurred"
            })
        })
}



const show = (req, res, next) => {
    let userId = req.body.id
    User.findById(userId)
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message: "An error occurred"
            })
        })
}

const store = (req, res, next) => {
    let user = new User({
        name: req.body.name,
        vehicle_no: req.body.vehicle_no,
        email: req.body.email,
        phone: req.body.phone,
        active: true,
    })

    if(req.file){
        user.avatar = req.file.path
    }
    user.save()
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message: error
            })
        })
}

const update = (req, res, next) => {
    let userId = req.body.id

    let user = {
        name: req.body.name,
        vehicle_no: req.body.vehicle_no,
        email: req.body.email,
        phone: req.body.phone,
        created_by: 1,
        updated_by: 1,
        active: true,
    }
    User.findByIdAndUpdate(userId, { $set: user })
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message: "An error occurred"
            })
        })
}

const destroy = (req, res, next) => {
    let userId = req.body.id

    User.findBiIdAndRemove(userId)
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message: "An error occurred"
            })
        })
}

module.exports = { index, show, store, update, destroy }