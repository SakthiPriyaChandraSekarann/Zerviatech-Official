const careerService = require("../services/careerService");

// --- NEW CONTROLLER START ---
exports.applyJob = async (req, res) => {
  try {
    const result = await careerService.createCareerService(req.body, req.file);

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: result,
    });
  } catch (error) {
    console.error("Career Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit application",
    });
  }
};
// --- NEW CONTROLLER END ---