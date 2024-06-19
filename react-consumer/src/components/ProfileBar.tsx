export default function ProfileBar() {
  return (
    <div className="w-60 flex flex-col justify-between px-4 mt-8">
      <div className="flex flex-col gap-2">
        <span className="flex gap-2 items-center justify-center w-full text-sm border p-2 rounded-lg cursor-pointer">
          <span>
            <div>Hello Adrian</div>
            <span className="text-xs text-gray-400">Employye iD: 40123</span>
          </span>
          <img
            src="https://raw.githubusercontent.com/ananduremanan/Demo/main/man.png"
            alt="user icon"
            className="w-10 h-10"
          />
        </span>

        <span className="flex gap-2 items-start w-full border p-2 rounded-lg cursor-pointer flex-col text-xs">
          <span className="text-xs text-gray-400">Task Complition</span>
          <p className="flex flex-col">
            <span>Projects Assigned: 2</span>
            <span>Projects Completed: 4</span>
            <span>
              <button className="bg-blue-400 p-1 rounded-lg mt-4 text-white">
                View Tasks
              </button>
            </span>
          </p>
        </span>

        <span className="flex gap-2 items-start w-full border p-2 rounded-lg cursor-pointer flex-col text-xs">
          <span className="text-xs text-gray-400">Performance Score</span>
          <div className="half-circle self-center flex items-center justify-center">
            <span className="text-6xl text-gray-600">30</span>
          </div>
          <div className="extra-sm text-gray-400 self-center">
            Based on Last 6 Months Performance
          </div>
        </span>
      </div>
    </div>
  );
}
