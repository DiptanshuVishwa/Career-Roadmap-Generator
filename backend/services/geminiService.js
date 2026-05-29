import {GoogleGenAI} from "@google/genai";

export const generateRoadmapWithAi = async ( targetRole, currentSkills, experienceLevel )=>{
    const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
    const prompt = `Genrate a career roadmap. Target Role: ${targetRole} Current Skills: ${currentSkills.join(",")} Experience Level: ${experienceLevel}
    Rules: 1.Return exaclty 8 roadmap steps
            2. One step per line
            3. No markdown
            4. No numbering explanation
            5. Keep steps concise`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });
    const text = response.text;
    return text.split("\n").map(step => step.trim()).filter(step => step.length > 0);
};