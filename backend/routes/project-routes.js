const express = require('express');
const router = express.Router();

router.get('/project', projectController.getAllProjects);
