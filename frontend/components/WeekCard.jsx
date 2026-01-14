function WeekCard({ days }) {
    // Default to 7 empty days if no days provided
    const weekDays = days || Array(7).fill(null).map((_, i) => ({ date: (12 + i).toString(), tasks: [] }));

    return (
        <div style={{
            display: 'flex',
            backgroundColor: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: '12px',
            overflow: 'hidden',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            {weekDays.map((day, index) => (
                <div
                    key={index}
                    style={{
                        flex: '1',
                        borderRight: index < weekDays.length - 1 ? '1px solid #333' : 'none',
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
