import { Trash2, CalendarDays, ChevronDown, Plus } from "lucide-react";

const TaskCard = ({ title, description, date, status }) => {
  // Set color based on status
  const statusColors = {
    Done: "text-green-500",
    Progress: "text-yellow-500",
    Pending: "text-pink-500",
  };

  return (
    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm w-full max-w-sm">
      {/* Header: Icon and Title */}
      <div className="flex items-start gap-3">
        {/* Left Icon */}
        <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold text-lg">
          Bk
        </div>

        {/* Title and Description */}
        <div className="flex-1">
          <h3 className="text-md font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>

        {/* Delete Icon */}
        <button className="text-gray-400 hover:text-red-500">
          <Trash2 size={18} />
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <CalendarDays size={16} />
          <span>{date}</span>
        </div>
        <span className={`text-sm font-semibold ${statusColors[status]}`}>
          ● {status}
        </span>
      </div>
    </div>
  );
};

const TaskSection = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">All Task List</h2>

        <div className="flex flex-wrap items-center gap-4">
          <button className="flex items-center px-4 py-2 border rounded-lg text-gray-600 text-sm bg-white shadow-sm hover:border-gray-400">
            Select Task Category <ChevronDown className="w-4 h-4 ml-2" />
          </button>

          <button className="flex items-center px-4 py-2 border rounded-lg text-gray-600 text-sm bg-white shadow-sm hover:border-gray-400">
            All Task <ChevronDown className="w-4 h-4 ml-2" />
          </button>

          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 text-sm shadow">
            <Plus className="w-4 h-4" />
            Add New Task
          </button>
        </div>
      </div>

      {/* Task Cards Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <TaskCard
          title="Art and Craft"
          description="Upload your job description and assign to category."
          date="April 19, 2024"
          status="Pending"
        />
        <TaskCard
          title="Math Assignment"
          description="Solve chapter 5 problems and submit online."
          date="April 21, 2024"
          status="Progress"
        />
        <TaskCard
          title="Science Project"
          description="Completed and submitted to teacher."
          date="April 17, 2024"
          status="Done"
        />
      </div>
    </div>
  );
};

export default TaskSection;
