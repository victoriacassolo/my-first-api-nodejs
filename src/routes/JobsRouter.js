const JobsController = require('../controllers/JobsController');

module.exports = router => {
  router.get('/jobs', JobsController);
};
