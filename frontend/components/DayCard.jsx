function DayCard({ date, children, tasks, isToday, hasDarkBackground, onAddTask, onTaskClick }) {
    
    // If tasks array is provided, render TaskCards from the array
    // Otherwise, render children
    const renderTasks = () => {
        if (tasks && Array.isArray(tasks)) {
            return tasks.map((task, index) => (
                <TaskCard
                    key={index}
                    name={task.name}
                    class={task.class}
                    status={task.status}
                    type={task.type}
                    note={task.note}
                    onClick={(taskData) => {
                        if (onTaskClick) {
                            onTaskClick(taskData, date, index);
                        }
                    }}
                />
            ));
        }
        return children;
    };

    const hasTasks = tasks && Array.isArray(tasks) && tasks.length > 0;
    
    return (
        <div 
            className={`day-card ${hasDarkBackground ? 'has-dark-background' : ''} ${isToday ? 'is-today' : ''}`}
        >
            {/* Date at the top */}
            <div className="day-card-date">
                {date || '17'}
            </div>
            
            {/* Tasks container */}
            <div className="day-card-tasks">
                {renderTasks()}
            </div>
            
            {/* Plus icon button - shows on hover */}
            <button
                className="day-card-add-button"
                onClick={(e) => {
                    e.stopPropagation();
                    if (onAddTask) {
                        onAddTask(date);
                    }
                }}
            >
                +
            </button>
        </div>
    );
}
