const Jwt = require('jsonwebtoken')

const ensureSignedIn = (req,res,next) => {
    if(!req.session.jwtToken){
        return res.json({
            success: false,
            error:"You must signIn!"
        })
    }
    next();
}

const ensureSignedOut = (req,res,next) => {
    if(req.session.jwtToken){
        return res.json({
            success: false,
            error:"You already signIn!"
        })
    }
    next();
}

const currentUser = (req, res, next) => {
    console.log(req.session.jwtToken);
    if(!req.session.jwtToken){
        return res.json({
            success: false,
            error: `You must sign In`
        })
    }

    const user = Jwt.verify(req.session.jwtToken, 't0kenEncrypti0n')
    req.currentUser = user;
    next()
}

module.exports = {
    ensureSignedIn,
    ensureSignedOut,
    currentUser
}