"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

export default function RoadmapHistory() {
  const [roadmaps, setRoadmaps] = useState([]);

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  const fetchRoadmaps = async () => {
    try {
      const { data } = await api.get("/roadmap");

      setRoadmaps(data.roadmaps);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async(id)=>{
    const confirmed = window.confirm("Are you sure you want to delete this roadmap?");
    if(!confirmed) return;
    try{
        await api.delete(`/roadmap/${id}`);
        fetchRoadmaps();
    }catch(error){
        console.error(error);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-black mb-6">
        Roadmap History
      </h2>

      {roadmaps.length === 0 ? (
        <p className="text-gray-500">
          No roadmaps generated yet.
        </p>
      ) : (
        <div className="space-y-4">
          {roadmaps.map((roadmap) => (
            <div
              key={roadmap._id}
              className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
            >
              <h3 className="font-bold text-lg text-black">
                {roadmap.targetRole}
              </h3>

              <p className="text-gray-600 text-sm">
                {roadmap.experienceLevel}
              </p>

              <ul className="mt-3 space-y-2">
                {roadmap.generatedRoadmap.map(
                  (step, index) => (
                    <li
                      key={index}
                      className="text-black"
                    >
                      {index + 1}. {step}
                    </li>
                  )
                )}
              </ul>
               <button
      onClick={() => handleDelete(roadmap._id)}
      className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
    >
      Delete
    </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}