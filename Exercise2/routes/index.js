//use for routing
var express = require('express');
var router = express.Router();

const { login } = require('../service/login');
const { register } = require('../service/register');
const { joiValidation } = require('../middleware/joiValidation');
const { loginSchema, registerSchema } = require('../schemas/index');

//home screen
router.get('/', function(req,res,next){
    console.log("router up");
    res.send("Hello, here is my API");
});

//login page
router.post('/login', joiValidation(loginSchema), async(req ,res ,next)=>{
    // const param = JSON.parse(req.body);
    const { email, password } = req.body;
    const result = await login( email, password);
    res.json(result);
});

//register

router.post('/register', joiValidation(registerSchema), async(req,res,next)=>{
    // const param = JSON.parse(req.body);
    const result = await register(req.body);
    res.json(result);
});

module.exports = router;