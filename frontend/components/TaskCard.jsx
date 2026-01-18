function TaskCard({ name, class: course, status, type, note, onClick }) {
    // Map status to color classes - Blue theme
    const getStatusColor = (status) => {
        const statusLower = status?.toLowerCase() || '';
        if (statusLower.includes('todo') || statusLower.includes('to-do')) {
            return 'golden'; // Golden yellow for To-Do
        } else if (statusLower.includes('in-progress') || statusLower.includes('in progress')) {
            return 'blue';
        } else if (statusLower.includes('done') || statusLower.includes('completed')) {
            return 'teal'; // Teal/Cyan for completed
        }
        return 'golden';
    };

    // Map type to icon
    const getTypeIcon = (type) => {
        const typeLower = type?.toLowerCase() || '';
        if (typeLower.includes('assignment')) {
            return '📝';
        } else if (typeLower.includes('quiz')) {
            return '✏️';
        } else if (typeLower.includes('exam')) {
            return '📋';
        } else if (typeLower.includes('weekly')) {
            return '📅';
        }
        return '📝';
    };

    const statusColor = getStatusColor(status);
    const typeIcon = getTypeIcon(type);
    
    return (
        <button 
            type="button"
            className="task-card"
            onClick={() => {
                if (onClick) {
                    onClick({
                        name,
                        class: course,
                        status,
                        type,
                        note
                    });
                }
            }}
        >
            <div className="task-card-header">
                <span className="task-card-icon">{typeIcon}</span>
                <h3 className="task-card-title">{name || 'Task Name'}</h3>
            </div>
            
            <div className="task-card-course">
                <span className="task-card-course-icon">📚</span>
                <span className="task-card-course-text">{course || 'Course'}</span>
            </div>

            <div className="task-card-tags">
                <span className={`task-card-status ${statusColor}`}>
                    {status || 'To-Do'}
                </span>
                
                <span className="task-card-type">
                    {type || 'Assignment'}
                </span>
            </div>

            {note && (
                <div className="task-card-note">
                    {note}
                </div>
            )}
        </button>
    );
}