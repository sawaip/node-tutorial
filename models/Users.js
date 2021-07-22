const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vehicle_no: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: Number,
        required: true,
        unique: true

    },
    password: {
        type: String
    },
    created_by: { type: Number, default: 1 },
    updated_by: { type: Number, default: 1 },
    active: {
        type: Boolean,
        default: true
    },
    avatar: {
        type: String
    }
},
    { timestamps: true });

const Users = new mongoose.model("Users", usersSchema);

module.exports = Users;