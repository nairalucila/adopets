
const validator = require('validator');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const register = async function (req, res) {
    if (!validator.isEmail(req.body.email)) {
        return res.sendStatus(404)
    }
    const { firstName,
        lastName,
        email,
        password,
        phone } = req.body;

    let user;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone
        })

    } catch (e) {
        return res.sendStatus(500)
    }

    res.status(201).json(user)
}




module.exports = { register }



