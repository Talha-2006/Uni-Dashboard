const { useState, useMemo } = React;

function App() {
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [selectedDate, setSelectedDate] = useState(null);
    const [editingTask, setEditingTask] = useState(null); // { task, date, taskIndex }
    
    // Get Monday of the current week
    const getMondayOfWeek = (date) => {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
        const monday = new Date(d);
        monday.setDate(diff);
        return monday;
    };
    
    // Initialize current week start (Monday of current week)
    const [currentWeekStart, setCurrentWeekStart] = useState(() => {
        return getMondayOfWeek(new Date());
    });
    
    // Store tasks by full date string (YYYY-MM-DD format)
    const [tasksByDate, setTasksByDate] = useState(() => {
        // Initialize with some sample tasks
        const today = new Date();
        const monday = getMondayOfWeek(today);
        const initialTasks = {};
        
        // Add sample tasks for the initial week
        const sampleDates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(monday);
            date.setDate(monday.getDate() + i);
            sampleDates.push(date);
        }
        
        // Sample tasks
        if (sampleDates[0]) {
            const dateStr = sampleDates[0].toISOString().split('T')[0];
            initialTasks[dateStr] = [
                { name: "PCRS", class: "CSC209", status: "Completed", type: "Weekly", note: "Due at 3pm" },
                { name: "Weekly Check In", class: "MAT232", status: "Completed", type: "Weekly", note: "Due at 6pm" }
            ];
        }
        if (sampleDates[4]) {
            const dateStr = sampleDates[4].toISOString().split('T')[0];
            initialTasks[dateStr] = [
                { name: "Quiz 1", class: "STA260", status: "To-Do", type: "Assignment", note: "Due at 4 pm" }
            ];
        }
        if (sampleDates[6]) {
            const dateStr = sampleDates[6].toISOString().split('T')[0];
            initialTasks[dateStr] = [
                { name: "Problem Set 0", class: "CSC263", status: "In-Progress", type: "Assignment", note: "Due at 5pm" }
            ];
        }
        
        return initialTasks;
    });
    
    // Generate week data from current week start using useMemo
    const weekData = useMemo(() => {
        const weekDays = [];
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];
        
        for (let i = 0; i < 7; i++) {
            const date = new Date(currentWeekStart);
            date.setDate(date.getDate() + i);
            const dateStr = date.toISOString().split('T')[0];
            const dayNumber = date.getDate().toString();
            const isToday = dateStr === todayStr;
            
            weekDays.push({
                date: dayNumber,
                fullDate: dateStr,
                tasks: tasksByDate[dateStr] || [],
                isToday: isToday
            });
        }
        
        return weekDays;
    }, [currentWeekStart, tasksByDate]);

    const handleCreateTask = (taskData) => {
        // If editing a task, update it; otherwise create a new one
        if (editingTask) {
            // Update existing task
            setTasksByDate(prevTasks => {
                const updatedTasks = { ...prevTasks };
                const dateStr = editingTask.fullDate;
                
                if (updatedTasks[dateStr]) {
                    const tasks = [...updatedTasks[dateStr]];
                    tasks[editingTask.taskIndex] = {
                        name: taskData.name,
                        class: taskData.class,
                        status: taskData.status,
                        type: taskData.type,
                        note: taskData.note || ''
                    };
                    updatedTasks[dateStr] = tasks;
                }
                
                return updatedTasks;
            });
            setEditingTask(null);
        } else {
            // Create new task
            // Find the day to add the task to based on date
            // Use selectedDate if available, otherwise try to extract from taskData.date
            let taskDateStr = null;
            
            if (selectedDate) {
                // Find the fullDate from weekData
                const day = weekData.find(d => d.date === selectedDate);
                if (day) {
                    taskDateStr = day.fullDate;
                }
            }
            
            if (!taskDateStr && taskData.date) {
                const dateObj = new Date(taskData.date);
                taskDateStr = dateObj.toISOString().split('T')[0];
            }
            
            if (taskDateStr) {
                setTasksByDate(prevTasks => {
                    const updatedTasks = { ...prevTasks };
                    if (!updatedTasks[taskDateStr]) {
                        updatedTasks[taskDateStr] = [];
                    }
                    updatedTasks[taskDateStr] = [
                        ...updatedTasks[taskDateStr],
                        {
                            name: taskData.name,
                            class: taskData.class,
                            status: taskData.status,
                            type: taskData.type,
                            note: taskData.note || ''
                        }
                    ];
                    return updatedTasks;
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
        // Find the fullDate from weekData
        const day = weekData.find(d => d.date === date);
        setEditingTask({
            task: taskData,
            date: date,
            fullDate: day?.fullDate || null,
            taskIndex: taskIndex
        });
        setSelectedDate(date);
        setCurrentPage('create');
    };
    
    // Navigation handlers
    const handlePreviousWeek = () => {
        const newWeekStart = new Date(currentWeekStart);
        newWeekStart.setDate(currentWeekStart.getDate() - 7);
        setCurrentWeekStart(newWeekStart);
    };
    
    const handleNextWeek = () => {
        const newWeekStart = new Date(currentWeekStart);
        newWeekStart.setDate(currentWeekStart.getDate() + 7);
        setCurrentWeekStart(newWeekStart);
    };
    
    const handleToday = () => {
        const todayMonday = getMondayOfWeek(new Date());
        setCurrentWeekStart(todayMonday);
    };
    
    // Get month and year for the current week
    const getMonthYear = () => {
        // Use the middle of the week (Wednesday) to determine month/year
        const wednesday = new Date(currentWeekStart);
        wednesday.setDate(currentWeekStart.getDate() + 2);
        
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
        
        return {
            month: months[wednesday.getMonth()],
            year: wednesday.getFullYear().toString()
        };
    };
    
    const { month, year } = getMonthYear();

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
            <WeekHeader 
                month={month} 
                year={year}
                onPrevious={handlePreviousWeek}
                onNext={handleNextWeek}
                onToday={handleToday}
            />
            <WeekCard days={weekData} onAddTask={handleAddTask} onTaskClick={handleTaskClick} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
