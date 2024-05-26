export default function Avatar({ userId, username, online }) {
  const colors = [
    "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/50",
    "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 shadow-lg shadow-teal-500/50",
    "bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-lg shadow-green-500/50",
    "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg shadow-purple-500/50",
    "bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 shadow-lg shadow-blue-500/50",
    "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 shadow-lg shadow-lime-500/50",
    "bg-gradient-to-r from-red-400 via-red-500 to-red-600 shadow-lg shadow-red-500/50",
    "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 shadow-lg shadow-pink-500/50",
    "bg-gradient-to-r from-fushsia-200 via-fushsia-400 to-fushsia-500 shadow-lg shadow-fushsia-500/50",
    "bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 shadow-lg shadow-rose-500/50",
  ];
  const userIdBase10 = parseInt(userId.substring(10), 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];
  return (
    <div
      className={" w-10 h-10 relative rounded-full flex items-center " + color}
    >
      <div className="font-bold text-2xl drop-shadow-[3px_5px_10px_rgba(6,6,6,0.1)] text-center w-full text-white">
        {username[0]}
      </div>
      {online && (
        <div className="absolute w-3 h-3 bg-emerald-400 bottom-0 right-0 rounded-full border border-white"></div>
      )}
      {!online && (
        <div className="absolute w-3 h-3 bg-gray-400 bottom-0 right-0 rounded-full border border-white"></div>
      )}
    </div>
  );
}
