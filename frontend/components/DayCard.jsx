function DayCard({ date, children, tasks, isToday, hasDarkBackground, onAddTask }) {
    const { useState } = React;
    const [isHovered, setIsHovered] = useState(false);
    
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

    const hasTasks = tasks && Array.isArray(tasks) && tasks.length > 0;
    
    return (
        <div 
            style={{
                backgroundColor: hasDarkBackground 
                    ? 'rgba(19, 32, 70, 0.5)' 
                    : 'transparent',
                borderTop: isToday ? '3px solid #2F80ED' : 'none',
                padding: '16px',
                margin: '0',
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                color: '#fff',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                position: 'relative',
                minHeight: '200px',
                transition: 'background-color 0.2s'
            }}
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
        >
            {/* Date at the top */}
            <div style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#AEC5EB',
                marginBottom: '12px'
            }}>
                {date || '17'}
            </div>
            
            {/* Tasks container */}
            <div>
                {renderTasks()}
            </div>
            
            {/* Plus icon button - shows on hover */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (onAddTask) {
                        onAddTask(date);
                    }
                }}
                style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    opacity: isHovered ? 1 : 0,
                    transition: 'all 0.2s',
                    fontSize: '24px',
                    color: 'rgba(174, 197, 235, 0.5)',
                    fontWeight: '300',
                    backgroundColor: 'rgba(19, 32, 70, 0.6)',
                    border: '1px solid rgba(47, 128, 237, 0.3)',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    zIndex: 10
                }}
                onMouseEnter={(e) => {
                    e.target.style.color = '#2F80ED';
                    e.target.style.backgroundColor = 'rgba(47, 128, 237, 0.2)';
                    e.target.style.borderColor = '#2F80ED';
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(174, 197, 235, 0.5)';
                    e.target.style.backgroundColor = 'rgba(19, 32, 70, 0.6)';
                    e.target.style.borderColor = 'rgba(47, 128, 237, 0.3)';
                }}
            >
                +
            </button>
        </div>
    );
}
