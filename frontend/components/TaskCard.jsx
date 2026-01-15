function TaskCard({ name, class: course, status, type, note }) {
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

    const { useState } = React;
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            style={{
                background: 'rgba(19, 32, 70, 0.6)',
                backdropFilter: 'blur(10px)',
                border: isHovered ? '1px solid rgba(47, 128, 237, 0.5)' : '1px solid rgba(47, 128, 237, 0.2)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '8px',
                width: '100%',
                aspectRatio: '1 / 1',
                maxWidth: '210px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                color: '#fff',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                boxShadow: isHovered 
                    ? '0 8px 24px rgba(47, 128, 237, 0.3)' 
                    : '0 4px 12px rgba(0, 0, 0, 0.15)',
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ marginRight: '8px', fontSize: '18px', lineHeight: '1' }}>{typeIcon}</span>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#FFFFFF' }}>{name || 'Task Name'}</h3>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ marginRight: '6px', fontSize: '16px', lineHeight: '1' }}>📚</span>
                <span style={{ fontSize: '13px', color: '#AEC5EB' }}>{course || 'Course'}</span>
            </div>

            <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{
                    backgroundColor: statusColor === 'golden' ? '#F59E0B' : statusColor === 'blue' ? '#2F80ED' : '#14B8A6',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '500'
                }}>
                    {status || 'To-Do'}
                </span>
                
                <span style={{
                    backgroundColor: 'rgba(19, 32, 70, 0.8)',
                    color: '#AEC5EB',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '500',
                    border: '1px solid rgba(47, 128, 237, 0.3)'
                }}>
                    {type || 'Assignment'}
                </span>
            </div>

            {note && (
                <div style={{ marginTop: 'auto', fontSize: '12px', color: '#AEC5EB', opacity: 0.8, paddingTop: '8px' }}>
                    {note}
                </div>
            )}
        </div>
    );
}
