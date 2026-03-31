import express from 'express';
import {onboarding, sendOtp, signin, signup } from '../controllers/auth.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/onboarding',verifyToken, onboarding);
router.post('/send-otp', verifyToken, sendOtp);


export default router;