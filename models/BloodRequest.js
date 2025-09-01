const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema(
    {
        needer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        patientName: { type: String, required: true },
        wardNo: { type: String, required: true },
        hospitalName: { type: String, required: true },
        hospitalAddress: { type: String, required: true },
        bloodGroup: { type: String, required: true },
        requestedInstitutions: [
            { type: mongoose.Schema.Types.ObjectId, ref: "User" } // Providers
        ],
        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("BloodRequest", bloodRequestSchema);
