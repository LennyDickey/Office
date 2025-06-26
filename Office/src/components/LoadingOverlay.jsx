import { useProgress } from "@react-three/drei";

const LoadingOverlay = () => {
  const { progress, active } = useProgress();

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 flex-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Summoning...</h2>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#ffadd6] to-[#9486c1] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/70 text-sm">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
