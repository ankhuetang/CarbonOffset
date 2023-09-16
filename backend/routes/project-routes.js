const express = require('express');
const projectController = require('../controllers/project-controller');
const router = express.Router();

router.get('/', projectController.getAllProjects);

module.exports = router;
