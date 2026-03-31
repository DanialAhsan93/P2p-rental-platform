import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

// export const signup = async (req, res, next) => {
//   const { username, email, password, referralSource, userRole } = req.body;

//   if (!username || !email || !password || username === '' || email === '' || password === '') {
//     next(errorHandler(400, 'All fileds are required'));
//   }

//   const hashedPassword = bcryptjs.hashSync(password, 10);

//   const newUser = new User({
//     username,
//     email,
//     password: hashedPassword,
//     referralSource: null, // optional, default null
//     userRole: null,             // optional, default null
//     onboardingCompleted: false // true only if both provided
//   });

//   try {
//     await newUser.save();
//     res.json('signup successful');
//   } catch (error) {
//     next(error)
//   }

// };

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password || username === '' || email === '' || password === '') {
    return next(errorHandler(400, 'All fields are required'));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    referralSource: null,
    userRole: null,
    onboardingCompleted: false
  });

  try {
    await newUser.save();

    // ✅ CREATE TOKEN
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // ✅ SET COOKIE
    res
      .cookie('access_token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
      })
      .status(200)
      .json({
        success: true, message: 'Signup successful', user: {
          _id: newUser._id,
          email: newUser.email,
          onboardingCompleted: newUser.onboardingCompleted
        }
      });

  } catch (error) {
    next(error);
  }
};

// export const onboarding = async (req, res, next) => {
//   const userId = req.user.id;
//   const { referralSource, userRole, phone, otp } = req.body;
//   console.log(referralSource, userRole, phone, otp);

//   if (!referralSource || !userRole || !phone || !otp) {
//     return next(errorHandler(400, 'All fields are required'));
//   }

//   try {
//     const user = await User.findById(userId);

//     if (!user) {
//       return next(errorHandler(404, 'User not found'));
//     }

//     // ✅ OTP validation
//     if (user.otp !== otp || user.otpExpires < Date.now()) {
//       return next(errorHandler(400, 'Invalid or expired OTP'));
//     }

//     // ✅ Update user
//     user.referralSource = referralSource;
//     user.userRole = userRole;
//     user.phone = phone;
//     user.phoneVerified = true;
//     user.onboardingCompleted = true;

//     // clear OTP
//     user.otp = null;
//     user.otpExpires = null;

//     await user.save();

//     res.json({
//       success: true,
//       message: 'Onboarding completed'
//     });

//   } catch (error) {
//     next(error);
//   }
// };

export const onboarding = async (req, res, next) => {
  const userId = req.user.id;
  const { referralSource, userRole, phone, otp } = req.body;


  if (!referralSource || !userRole || !phone || !otp) {
    return next(errorHandler(400, 'All fields are required'));
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }

    if (user.otp !== otp || user.otpExpires < Date.now()) {
      return next(errorHandler(400, 'Invalid or expired OTP'));
    }

    if (phone && phone !== user.phone) {
      const existing = await User.findOne({ phone });
      if (existing) {
        return next(errorHandler(400, 'Phone number already in use'));
      }
      user.phone = phone;
      user.phoneVerified = true;
    }

    user.referralSource = referralSource;
    user.userRole = userRole;
    user.onboardingCompleted = true;

    user.otp = null;
    user.otpExpires = null;

    await user.save();

    res.json({
      success: true,
      message: 'Onboarding completed'
    });

  } catch (error) {
    next(error);
  }
};

export const sendOtp = async (req, res, next) => {
  const { phone } = req.body;
  const userId = req.user.id;

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await User.findByIdAndUpdate(userId, {
      otp,
      otpExpires: Date.now() + 5 * 60 * 1000 // 5 min
    });

    console.log("OTP:", otp); // send via SMS in production

    res.json({ success: true, message: 'OTP sent' });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, 'All fileds are required'))
  };

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    };

    const validPassword = bcryptjs.compareSync(password, validUser.password)
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'))
    };

    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );

    // this is destructuring technique to hide the password;

    const { password: pass, ...rest } = validUser._doc;

    // this is another way to hide the password 

    // const rest = Object.assign({}, validUser._doc);
    // delete rest.password;


    res.status(200).cookie('access_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'None'
    }).json(rest);

  } catch (error) {
    next(error)
  }
};