const { useState } = React;

function App() {
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [selectedDate, setSelectedDate] = useState(null);
    const [editingTask, setEditingTask] = useState(null); // { task, date, taskIndex }
    const [weekData, setWeekData] = useState([
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
    ]);

    const handleCreateTask = (taskData) => {
        // If editing a task, update it; otherwise create a new one
        if (editingTask) {
            // Update existing task
            setWeekData(prevData => {
                return prevData.map(day => {
                    if (day.date === editingTask.date) {
                        const updatedTasks = [...day.tasks];
                        updatedTasks[editingTask.taskIndex] = {
                            name: taskData.name,
                            class: taskData.class,
                            status: taskData.status,
                            type: taskData.type,
                            note: taskData.note || ''
                        };
                        return {
                            ...day,
                            tasks: updatedTasks
                        };
                    }
                    return day;
                });
            });
            setEditingTask(null);
        } else {
            // Create new task
            // Find the day to add the task to based on date
            // Use selectedDate if available, otherwise try to extract from taskData.date
            let taskDate = selectedDate;
            
            if (!taskDate && taskData.date) {
                const dateObj = new Date(taskData.date);
                taskDate = dateObj.getDate().toString();
            }
            
            if (taskDate) {
                setWeekData(prevData => {
                    const updatedData = prevData.map(day => {
                        if (day.date === taskDate) {
                            return {
                                ...day,
                                tasks: [...day.tasks, {
                                    name: taskData.name,
                                    class: taskData.class,
                                    status: taskData.status,
                                    type: taskData.type,
                                    note: taskData.note || ''
                                }]
                            };
                        }
                        return day;
                    });
                    return updatedData;
                });
            }
        }
    };

    const handleNavigateToCreate = (date) => {
        setSelectedDate(date);
        setCurrentPage('create');
    };

    const handleNavigateToDashboard = () => {
        setCurrentPage('dashboard');
        setSelectedDate(null);
        setEditingTask(null);
    };

    const handleAddTask = (date) => {
        setEditingTask(null);
        handleNavigateToCreate(date);
    };

    const handleTaskClick = (taskData, date, taskIndex) => {
        setEditingTask({
            task: taskData,
            date: date,
            taskIndex: taskIndex
        });
        setSelectedDate(date);
        setCurrentPage('create');
    };

    if (currentPage === 'create') {
        return (
            <CreateTask 
                onBack={handleNavigateToDashboard}
                onSubmit={handleCreateTask}
                initialDate={selectedDate}
                initialTask={editingTask?.task}
            />
        );
    }

    return (
        <div className="app-container">
            <HeaderCard greeting="Morning" name="Talha" />
            <WeekHeader month="January" year="2026" />
            <WeekCard days={weekData} onAddTask={handleAddTask} onTaskClick={handleTaskClick} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
