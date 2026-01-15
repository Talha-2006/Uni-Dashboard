function WeekHeader({ month, year, onPrevious, onNext, onToday }) {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    return (
        <div style={{
            maxWidth: '1350px',
            width: '100%',
            marginBottom: '4px',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
                paddingLeft: '12px',
                paddingRight: '12px'
            }}>
                <h2 style={{
                    color: '#AEC5EB',
                    margin: 0,
                    fontSize: '24px',
                    fontWeight: '600',
                    letterSpacing: '-0.3px'
                }}>
                    {month || 'January'} {year || '2026'}
                </h2>
                
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <button
                        onClick={onPrevious}
                        style={{
                            backgroundColor: '#132046',
                            border: '1px solid rgba(47, 128, 237, 0.3)',
                            borderRadius: '8px',
                            color: '#FFFFFF',
                            padding: '8px 14px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '500',
                            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#2F80ED';
                            e.target.style.borderColor = '#2F80ED';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#132046';
                            e.target.style.borderColor = 'rgba(47, 128, 237, 0.3)';
                        }}
                    >
                        ←
                    </button>
                    
                    <button
                        onClick={onToday}
                        style={{
                            backgroundColor: 'transparent',
                            border: '1px solid rgba(47, 128, 237, 0.5)',
                            borderRadius: '8px',
                            color: '#AEC5EB',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '500',
                            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(47, 128, 237, 0.15)';
                            e.target.style.borderColor = '#2F80ED';
                            e.target.style.color = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.borderColor = 'rgba(47, 128, 237, 0.5)';
                            e.target.style.color = '#AEC5EB';
                        }}
                    >
                        Today
                    </button>
                    
                    <button
                        onClick={onNext}
                        style={{
                            backgroundColor: '#132046',
                            border: '1px solid rgba(47, 128, 237, 0.3)',
                            borderRadius: '8px',
                            color: '#FFFFFF',
                            padding: '8px 14px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '500',
                            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#2F80ED';
                            e.target.style.borderColor = '#2F80ED';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#132046';
                            e.target.style.borderColor = 'rgba(47, 128, 237, 0.3)';
                        }}
                    >
                        →
                    </button>
                </div>
            </div>
            
            <div style={{
                display: 'flex'
            }}>
                {daysOfWeek.map((day, index) => (
                    <div
                        key={index}
                        style={{
                            flex: '1',
                            padding: '12px',
                            textAlign: 'center',
                            color: '#D1E5FF',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
}
