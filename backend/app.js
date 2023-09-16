const express = require('express');

const app = express();

mongoURI =
	'mongodb+srv://CarbonOffset:CarbonOffset@carbonoffset.fr7kjux.mongodb.net/?retryWrites=true&w=majority';
mongoose
	.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		app.listen(8000);
		console.log('connected to DB');
	})
	.catch((err) => {});
