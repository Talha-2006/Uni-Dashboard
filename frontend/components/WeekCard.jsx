function WeekCard({ days }) {
    // Default to 7 empty days if no days provided
    const weekDays = days || Array(7).fill(null).map((_, i) => ({ date: (12 + i).toString(), tasks: [] }));

    return (
        <div style={{
            display: 'flex',
            backgroundColor: '#132046',
            border: '1px solid rgba(47, 128, 237, 0.2)',
            borderRadius: '16px',
            overflow: 'hidden',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            maxWidth: '1350px',
            width: '100%',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
            gap: '1px'
        }}>
            {weekDays.map((day, index) => (
                <div
                    key={index}
                    style={{
                        flex: '1',
                        borderRight: index < weekDays.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                        minWidth: '0',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <DayCard 
                        date={day?.date || (12 + index).toString()} 
                        tasks={day?.tasks || []}
                        isToday={day?.isToday || false}
                        hasDarkBackground={index >= weekDays.length - 2}
                    />
                </div>
            ))}
        </div>
    );
}
