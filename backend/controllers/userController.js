// const User = require("../models/User"); // Make sure to adjust the import based on your structure

// // Update User Profile
// const updateUserProfile = async (req, res) => {
//   const { userId } = req.params; // Assuming you're passing the user ID in the URL
//   const updateData = req.body;

//   try {
//     const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = {
//   updateUserProfile,
// };
