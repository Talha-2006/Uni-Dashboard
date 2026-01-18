function WeekHeader({ month, year, onPrevious, onNext, onToday }) {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    return (
        <div className="week-header">
            <div className="week-header-top">
                <h2 className="week-header-title">
                    {month || 'January'} {year || '2026'}
                </h2>
                
                <div className="week-header-controls">
                    <button
                        className="week-header-button"
                        onClick={onPrevious}
                    >
                        ←
                    </button>
                    
                    <button
                        className="week-header-button week-header-button-today"
                        onClick={onToday}
                    >
                        Today
                    </button>
                    
                    <button
                        className="week-header-button"
                        onClick={onNext}
                    >
                        →
                    </button>
                </div>
            </div>
            
            <div className="week-header-days">
                {daysOfWeek.map((day, index) => (
                    <div
                        key={index}
                        className="week-header-day"
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
}
