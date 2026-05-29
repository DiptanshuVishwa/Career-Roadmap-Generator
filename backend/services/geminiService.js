import {GoogleGenAI} from "@google/genai";

const generateWithFallback = async (ai, prompt) =>{
    const models = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash"];
    for(const model of models){
        try{
            console.log(`Tring ${model}...`);
            const response = await ai.models.generateContent({model, contents: prompt});
            console.log(`Success with ${model}`);
            return response.text;
        } catch(error){
            console.log(`${model} failed`);
        }
    }
    return `
Learn Fundamentals
Build Beginner Projects
Learn Advanced Concepts
Learn Frameworks
Learn Backend Development
Learn Databases
Build Full Stack Projects
Prepare for Interviews
`;
};


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

    const text = await generateWithFallback(ai, prompt);
    return text.split("\n").map(step => step.trim()).filter(step => step.length > 0);
};