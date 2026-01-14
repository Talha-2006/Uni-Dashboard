function DayCard({ date, children, tasks, isToday, hasDarkBackground }) {
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
                />
            ));
        }
        return children;
    };

    return (
        <div style={{
            backgroundColor: isToday 
                ? 'rgba(220, 38, 38, 0.15)' 
                : hasDarkBackground 
                    ? '#2E2E2E' 
                    : 'transparent',
            padding: '16px',
            margin: '0',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            color: '#fff',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            {/* Date at the top */}
            <div style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#ccc',
                marginBottom: '12px'
            }}>
                {date || '17'}
            </div>
            
            {/* Tasks container */}
            <div>
                {renderTasks()}
            </div>
        </div>
    );
}
