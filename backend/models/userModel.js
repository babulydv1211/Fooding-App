import mongoose from "mongoose";

// Define the User schema
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }, // Fixed "equired" typo
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        cartData: { type: Object, default: {} },
    },
    { minimize: false } // Prevents removal of empty objects
);

// Check for an existing model before defining it to avoid OverwriteModelError
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
