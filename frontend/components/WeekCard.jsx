function WeekCard({ days, onAddTask, onTaskClick }) {
    // Default to 7 empty days if no days provided
    const weekDays = days || Array(7).fill(null).map((_, i) => ({ date: (12 + i).toString(), tasks: [] }));

    return (
        <div className="week-card">
            {weekDays.map((day, index) => (
                <div
                    key={index}
                    className={`week-card-day ${index < weekDays.length - 1 ? 'week-card-day-border' : ''}`}
                >
                    <DayCard 
                        date={day?.date || (12 + index).toString()} 
                        tasks={day?.tasks || []}
                        isToday={day?.isToday || false}
                        hasDarkBackground={index >= weekDays.length - 2}
                        onAddTask={onAddTask}
                        onTaskClick={onTaskClick}
                    />
                </div>
            ))}
        </div>
    );
}
