const express = require('express');
const stdConctroller  = require('../controllers/Student');
const checkAdmin = require('../middleware/authentication');

const router = express.Router();

router.get('/list',checkAdmin,stdConctroller.getStudents);
router.get('/filter',stdConctroller.getStudentsFilter);
router.get('/unique',stdConctroller.getStudentsUniqueData);
router.post('',checkAdmin,stdConctroller.postStudents)

module.exports = router;