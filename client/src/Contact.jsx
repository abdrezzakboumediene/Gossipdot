import Avatar from "./Avatar.jsx";

export default function Contact({ id, username, onClick, selected, online }) {
  return (
    <div
      key={id}
      onClick={() => onClick(id)}
      className={
        "border-b border-gray-100 flex items-center gap-2 cursor-pointer " +
        (selected
          ? "bg-blue-50 bg-gradient-to-br from-sky-50 via-blue-50 to-blue-100"
          : "")
      }
    >
      {selected && (
        <div className="w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-blue-600 h-12 rounded-r-md drop-shadow-[5px_2px_10px_rgba(8,6,186,0.2)]"></div>
      )}
      <div className="flex gap-2 py-2 pl-4 items-center">
        <Avatar online={online} username={username} userId={id} />
        <span className="text-gray-800">{username}</span>
      </div>
    </div>
  );
}
