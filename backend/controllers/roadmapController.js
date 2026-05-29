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

export const getAllRoadmaps = async (req, res) =>{
    try{
        const roadmaps = await Roadmap.find().sort({createdAt: -1});
        res.status(200).json({
            success: true,
            count: roadmaps.length,
            roadmaps,
        });
    } catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to fetch roadmaps"
        });
    }
};

export const deleteRoadmap = async (req, res) =>{
    try{
        const roadmap = await Roadmap.findByIdAndDelete(req.params.id);
        if(!roadmap){
            return res.status(404).json({
                success: false,
                message: "Roadmap not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Roadmap deleted successfully"
        });
    } catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to delete roadmap"
        });
    }
};