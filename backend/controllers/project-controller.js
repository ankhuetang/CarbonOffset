const Project = require('../models/project');

const getAllProjects = async (req, res, next) => {
	let projects;
	try {
		projects = Project.find();
	} catch (err) {
		return next(err);
	}
	res.json({ projects });
};

const getProjectById = async (req, res, next) => {
	const projectId = req.body.id;
	let project;
	try {
		project = Project.findById(projectId);
	} catch (err) {
		return next(err);
	}
	res.json({ project });
};

const getProjectsBySellerId = async (req, res, next) => {
	const sellerId = req.body.sellerId;
	let projectsBySeller;
	try {
		projectsBySeller = await Project.find({ sellerId: sellerId });
	} catch (err) {
		return next(err);
	}
	res.json({ projectsBySeller });
};

const getProjectsByBuyerId = async (req, res, next) => {
	const buyerId = req.body.buyerId;
	let projectsByBuyer;
	try {
		projectsByBuyer = await Project.find({ buyerId: buyerId });
	} catch (err) {
		return next(err);
	}
	res.json({ projectsByBuyer });
};

exports.getAllProjects = getAllProjects;
