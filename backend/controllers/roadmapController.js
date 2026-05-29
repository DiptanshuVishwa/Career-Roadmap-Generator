import Roadmap from "../models/Roadmap.js";
import {generateRoadmapWithAi} from "../services/geminiService.js";

export const generateRoadmap = async (req,res) =>{
    try{
        const {
        targetRole,
        currentSkills,
        experienceLevel
        } = req.body;
        const roadmapSteps = await generateRoadmapWithAi(targetRole, currentSkills, experienceLevel);
        const roadmap = await Roadmap.create({
            targetRole, currentSkills, experienceLevel, generatedRoadmap: roadmapSteps,
        });
        res.status(201).json({
            success: true,
            roadmap
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to generate roadmap"
        });
    }
};