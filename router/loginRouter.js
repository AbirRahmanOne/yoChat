// external import
const express = require("express");

// internal import 
const { getLogin } = require('../controllers/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router();

//login page
router.get('/', decorateHtmlResponse("Login"), getLogin) ;

module.exports = router;