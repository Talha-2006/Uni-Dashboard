const { useState } = React;

function App() {
    const weekData = [
        {
            date: "12",
            tasks: [
                { name: "PCRS", class: "CSC209", status: "Completed", type: "Weekly", note: "Due at 3pm" },
                { name: "Weekly Check In", class: "MAT232", status: "Completed", type: "Weekly", note: "Due at 6pm" }
            ]
        },
        { date: "13", tasks: [] },
        { date: "14", tasks: [] },
        { date: "15", tasks: [] },
        {
            date: "16",
            tasks: [
                { name: "Quiz 1", class: "STA260", status: "To-Do", type: "Assignment", note: "Due at 4 pm" }
            ],
            isToday: true
        },
        { date: "17", tasks: [] },
        {
            date: "18",
            tasks: [
                { name: "Problem Set 0", class: "CSC263", status: "In-Progress", type: "Assignment", note: "Due at 5pm" }
            ]
        }
    ];

    return (
        <div style={{ 
            padding: '20px', 
            backgroundColor: '#0A1128', 
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        }}>
            <HeaderCard greeting="Morning" name="Talha" />
            <WeekHeader month="January" year="2026" />
            <WeekCard days={weekData} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
