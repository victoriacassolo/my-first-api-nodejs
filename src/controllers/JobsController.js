module.exports = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      message: 'This route will redirect to jobs'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.toString()
    });
  }
};
