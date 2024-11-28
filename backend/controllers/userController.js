import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Function to create JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "5d" });
};

// Register User
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;

    try {
        // Check if the user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // Check password length
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long" });
        }

        // Hash the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Register a new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });

        const user = await newUser.save(); // Save user data to the database

        // Generate a token
        const token = createToken(user._id);

        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "An error occurred during registration" });
    }
};

// Login User (Placeholder for implementation)
const loginUser = async (req, res) => {
     const {email,password} = req.body;
     try{
        const user = await userModel.findOne({email})

        if(!user){
          return res.json({success:false,message:"User doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
          return res.json({success:false,message:"Invalid credentials"})
        }
        const token =createToken(user._id);
        res.json({success:true,token})

     }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
     }
};

export { loginUser, registerUser };
