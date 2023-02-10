const mongoose = require('mongoose');

module.exports = {
  async open (uri) {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000,
      serverSelectionTimeoutMS: 30000
    });
  },

  async close () {
    await mongoose.disconnect();
  }
};
