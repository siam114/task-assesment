const authService = require("../services/auth.service");
const validateEmail = require("../utils/email.validator");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  console.log("🚀 ~ password:", password);
  console.log("🚀 ~ email:", email);

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  if (!password || password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }
  try {
    const token = await authService.registerUser(email, password);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log("🚀 ~ email:", email)

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  
  try {
    const token = await authService.loginUser(email, password);
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
