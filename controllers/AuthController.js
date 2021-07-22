const User = require("../models/Users");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
        if (err) {
            res.json({
                message: err
            })
        }
        const user = new User({
            name: req.body.name,
            vehicle_no: req.body.vehicle_no,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword
        })
        user.save()
            .then(user => {
                res.json({
                    message: "User created successfully"
                })
            })
            .catch(error => {
                res.json({
                    message: "some error occured"
                })
            })
    })

}

module.exports = { register }
