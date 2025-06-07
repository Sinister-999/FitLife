import bcrypt from "bcrypt";
import User from "../models/Users";

export const registerUser = async (req, res) => {
    const user = req.body;

    // Fields Check
    if (!user.username || !user.email || !user.password) {
        return res.status(400).json({success: false, message: 'Fill out all required fields!'});
    }

    // Existing User Check
    const usernameExists = await User.findOne({ username: user.username });
    const emailExists = await User.findOne({ email: user.email });

    if (usernameExists || emailExists) {
        return res.status(400).json({success: false, message: 'Username or Email already exists!'});
    }

    // Password Hashing
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    // Set Start Date
    user.startDate = new Date();

    // Create User
    const newUser = new User(user);

    try {
        await newUser.save();
        return res.status(201).json({success: true, message: 'User created!'});
    } catch (error) {
        console.error("Error in Account Creation:", error.message);
        res.status(500).json({success: false, message: 'User creation failed!'});
    }
};