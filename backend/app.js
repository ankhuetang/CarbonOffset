const express = require('express');
const projectRoutes = require('./routes/project-routes');
const buyerRoutes = require('./routes/buyer-routes');
const app = express();

app.use('/projects', projectRoutes);
app.use('/calculator', buyerRoutes);

mongoURI =
	'mongodb+srv://CarbonOffset:CarbonOffset@carbonoffset.fr7kjux.mongodb.net/?retryWrites=true&w=majority';
mongoose
	.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		app.listen(8000);
		console.log('connected to DB');
	})
	.catch((err) => {});
