function TaskCard({ name, class: course, status, type, note }) {
    // Map status to color classes
    const getStatusColor = (status) => {
        const statusLower = status?.toLowerCase() || '';
        if (statusLower.includes('todo') || statusLower.includes('to-do')) {
            return 'orange';
        } else if (statusLower.includes('in-progress') || statusLower.includes('in progress')) {
            return 'blue';
        } else if (statusLower.includes('done') || statusLower.includes('completed')) {
            return 'green';
        }
        return 'orange';
    };

    // Map type to color classes
    const getTypeColor = (type) => {
        const typeLower = type?.toLowerCase() || '';
        if (typeLower.includes('assignment')) {
            return 'brown';
        } else if (typeLower.includes('quiz')) {
            return 'purple';
        } else if (typeLower.includes('exam')) {
            return 'red';
        }
        return 'brown';
    };

    const statusColor = getStatusColor(status);
    const typeColor = getTypeColor(type);

    return (
        <div style={{
            backgroundColor: '#1e1e1e',
            border: '1px solid #333',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '8px',
            width: '100%',
            aspectRatio: '1 / 1',
            maxWidth: '220px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            color: '#fff',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ marginRight: '8px', fontSize: '18px' }}>❗</span>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>{name || 'Task Name'}</h3>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ marginRight: '8px', fontSize: '16px' }}>📊</span>
                <span style={{ fontSize: '14px', color: '#ccc' }}>{course || 'Course'}</span>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{
                    backgroundColor: statusColor === 'orange' ? '#ff9800' : statusColor === 'blue' ? '#2196f3' : '#4caf50',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                }}>
                    {status || 'To-Do'}
                </span>
                
                <span style={{
                    backgroundColor: typeColor === 'brown' ? '#795548' : typeColor === 'purple' ? '#9c27b0' : '#f44336',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                }}>
                    {type || 'Assignment'}
                </span>
            </div>

            {note && (
                <div style={{ marginTop: '8px', fontSize: '13px', color: '#aaa' }}>
                    {note}
                </div>
            )}
        </div>
    );
}
