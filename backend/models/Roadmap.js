import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema(
    {
        targetRole: {
            type: String,
            required: true
        },
        currentSkills: {
            type: [String],
            required: true,
        },
        experienceLevel: {
            type: String,
            required: true,
        },
        generatedRoadmap: {
            type: [String],
            required: true,
        },

    },
    {
        timestamps: true,
});

const Roadmap = mongoose.model("Roadmap", roadmapSchema);

export default Roadmap;