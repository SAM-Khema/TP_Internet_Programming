const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');

const register = require('../service/register')
const login = require('../service/login')
const { joiValidation } = require('../middleware/joiValidation');
const { registerSchema , loginSchema} = require('../Schema/index');
const {logout} = require('../service/logout')
const { ensureSignedIn, ensureSignedOut, currentUser } = require('../middleware/auth');

const userService = require('../service/user');
const {createASessionToken} = require('../service/utils')

 router.post('/register',joiValidation(registerSchema), async (req, res)=>{
    try {
        const user = await register(req.body);
        res.json(user)

    } catch (error) {
        console.log(error);
    }
})

//login page
router.post('/login', ensureSignedOut, joiValidation(loginSchema), async(req,res) => {
    try {
        console.log(req.body);
        const { email, password} = req.body;
        const result = await login(email, password);
        const token = jwt.sign(req.body, "t0kenEncrypti0n");
        req.session.jwtToken = token;
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//logout page
router.post('/logout', ensureSignedIn, (req,res) => {
    try {
        const result = logout(req.session);
        console.log("cookie", req.cookies);
        res.clearCookie('token')
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

router.get('/me', currentUser, async function (req, res, next) {
    const { currentUser } = req;
    // console.log(currentUser.email);
    const result = await userService.findById(currentUser.email);
    res.json(result);
  })
  
router.get('/user/:id', ensureSignedIn, currentUser, async function (req, res, next) {
    var userId = req.path.split("/user/")[1]
    // console.log(userId);
    const result = await userService.getUser(userId);
    res.json(result);
  })

// update user
router.post('/update-user', ensureSignedIn, currentUser, async function (req, res, next) {
    const { currentUser } = req;
    const user = await userService.findById(currentUser.email);
    const result = await userService.updateUser(user.data._id, req.body);
    res.json(result);
})

// update user password
router.post('/update-password', ensureSignedIn, currentUser, async function (req, res, next) {
    const { currentUser } = req;
    const user = await userService.findById(currentUser.email);
    const result = await userService.updatePassword(user.data._id, req.body);
    res.json(result);
})

router.post('/delete-user', ensureSignedIn, currentUser, async function (req, res, next) {
    const result = await userService.deleteUser(req.body);
    res.json(result);
})


module.exports = router