import RoadmapForm from "@/components/RoadmapForm";
import RoadmapHistory from "@/components/RoadmapHistory";

export default function Home() {
  return (
   <main className="min-h-screen bg-gray-100">
  <div className="max-w-6xl mx-auto px-6 py-10">
    <h1 className="text-4xl font-bold text-center text-black">
  Career Roadmap Generator
</h1>

        <p className="text-center text-gray-600 mt-3">
          Generate personalized AI-powered career roadmaps
        </p>

      <RoadmapForm />
      <RoadmapHistory />

      </div>
    </main>
  );
}