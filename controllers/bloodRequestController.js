const BloodRequest = require("../models/BloodRequest");
const User = require("../models/User");

exports.createBloodRequest = async (req, res) => {
    try {
        const {
            patientName,
            wardNo,
            hospitalName,
            hospitalAddress,
            bloodGroup,
            requestedInstitutions
        } = req.body;

        // Validate that all requested institutions exist and are "institution" role
        const institutions = await User.find({
            _id: { $in: requestedInstitutions },
            role: "institution"
        });

        if (institutions.length !== requestedInstitutions.length) {
            return res.status(400).json({ error: "One or more institutions not found" });
        }

        const request = new BloodRequest({
            needer: req.user._id, // logged-in needer
            patientName,
            wardNo,
            hospitalName,
            hospitalAddress,
            bloodGroup,
            requestedInstitutions: institutions.map(i => i._id)
        });

        await request.save();

        res.status(201).json({ message: "Blood request created", request });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getRequestsForInstitution = async (req, res) => {
    try {
        // logged-in institution's ID
        const institutionId = req.user._id;

        const requests = await BloodRequest.find({
            requestedInstitutions: institutionId
        })
            .populate("needer", "name email") // show info about the user who requested
            .populate("requestedInstitutions", "name email"); // optional

        res.status(200).json({ requests });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};