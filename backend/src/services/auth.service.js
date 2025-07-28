const prisma = require('../config/db.config');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

exports.registerUser = async (email, password) => {
  // const existingUser = await prisma.user.findUnique({ where: { email } });
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  // const newUser = await prisma.user.create({
  //   data: { email, password: hashedPassword },
  // });
  const newUser = new User({
    email,
    password: hashedPassword,
  });
  await newUser.save();
  console.log("🚀 ~ newUser:", newUser)
  const token = generateToken(newUser.id);
  return token;
}

exports.loginUser = async (email, password) => {
  // const user = await prisma.user.findUnique({ where: { email } });
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = generateToken(user.id);
  return token;
};