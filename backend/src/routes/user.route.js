const express = require('express');
const auth = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/me', auth, (req, res) => {
  res.json({ message: `Hello User ${req.user.userId}` });
});

module.exports = router;