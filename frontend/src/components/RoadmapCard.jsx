export default function RoadmapCard({step,index}) {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
      <span className="font-bold text-blue-600">
        {index + 1}.
      </span>

      <span className="text-black">
        {step}
      </span>
    </div>
  );
}