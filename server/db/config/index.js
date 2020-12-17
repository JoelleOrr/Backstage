const mongoose = require('mongoose');

const dbUrl =
  process.env.MONGODB_URI || `mongodb://localhost:27017/backstage-dev`;

try {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  console.log('Connected to MongoDB');
} catch (e) {
  console.log(e.toString());
}
