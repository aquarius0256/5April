const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/playground", { useNewUrlParser: true,useUnifiedTopology: true })
.then(res => console.log('Connected to db'));
