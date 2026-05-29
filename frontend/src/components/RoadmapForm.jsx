"use client";
import api from "@/services/api";
import { useState } from "react";
import RoadmapCard from "./RoadmapCard";

export default function RoadmapForm() {
  const [targetRole, setTargetRole] = useState("");
  const [currentSkills, setCurrentSkills] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        setLoading(true);
        const {data} = await api.post("/roadmap/generate",{
            targetRole,
            currentSkills: currentSkills.split(",").map(skill => skill.trim()), experienceLevel
        });
        setRoadmap(data.roadmap);
    } catch (error){
        console.error(error);
        alert("Failed to generate roadmap");
    } finally { setLoading(false) };
  };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md mt-10 space-y-4"
        >
            <input
                type="text"
                placeholder="Target Role"
                value={targetRole}
                onChange={(e) =>
                    setTargetRole(e.target.value)
                }
                                className="w-full border p-3 rounded text-black"

            />

            <input
                type="text"
                placeholder="Current Skills (comma separated)"
                value={currentSkills}
                onChange={(e) =>
                    setCurrentSkills(e.target.value)
                }
                                className="w-full border p-3 rounded text-black"

            />

            <select
                value={experienceLevel}
                onChange={(e) =>
                    setExperienceLevel(e.target.value)
                }
                className="w-full border p-3 rounded text-black"
            >
                <option value="">
                    Select Experience Level
                </option>
                <option value="Beginner">
                    Beginner
                </option>
                <option value="Intermediate">
                    Intermediate
                </option>
                <option value="Advanced">
                    Advanced
                </option>
            </select>

            <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
            >
                {loading ? "Generating.." : "Generated Roadmap"}
            </button>
            {roadmap && (
                 <div className="mt-6">
    <h2 className="text-xl font-bold mb-4 text-black">
      Generated Roadmap
    </h2>

    <ul className="space-y-2">
     {roadmap.generatedRoadmap.map(
  (step, index) => (
    <RoadmapCard
      key={index}
      step={step}
      index={index}
    />
  )
)}
    </ul>
  </div>
        )}

        </form>
    );
}