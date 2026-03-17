const {Router} = require('express');
const authController =require("../controllers/auth.controller");


const authRouter = Router();


/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

authRouter.post('/register', authController.registerUserController)

/**
 * @route POST /api/auth/login
 * @desc Login an existing user
 * @access Public
 */

authRouter.post('/login', authController.loginUserController)


/**
 * @route GET /api/auth/Logout
 * @desc clear token from user cookie and add the token  in blacklist
 * @access Public
 */

authRouter.get('/logout' , authController.logoutUserController)

module.exports = authRouter;