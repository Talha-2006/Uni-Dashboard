const { useState, useEffect } = React;

// Convert day number (e.g., "16") to full date string (e.g., "2026-01-16")
const convertDayToDateString = (dayNum) => {
    if (!dayNum) return '';
    const year = 2026; // Based on the week header showing January 2026
    const month = 1; // January
    const day = parseInt(dayNum);
    const date = new Date(year, month - 1, day);
    const yearStr = date.getFullYear();
    const monthStr = String(date.getMonth() + 1).padStart(2, '0');
    const dayStr = String(date.getDate()).padStart(2, '0');
    return `${yearStr}-${monthStr}-${dayStr}`;
};

function CreateTask({ onBack, onSubmit, initialDate, initialTask }) {
    const [formData, setFormData] = useState({
        name: initialTask?.name || '',
        class: initialTask?.class || '',
        status: initialTask?.status || 'To-Do',
        type: initialTask?.type || 'Assignment',
        note: initialTask?.note || '',
        date: initialDate ? convertDayToDateString(initialDate) : ''
    });

    useEffect(() => {
        if (initialTask) {
            setFormData(prev => ({
                ...prev,
                name: initialTask.name || '',
                class: initialTask.class || '',
                status: initialTask.status || 'To-Do',
                type: initialTask.type || 'Assignment',
                note: initialTask.note || ''
            }));
        }
        if (initialDate) {
            setFormData(prev => ({
                ...prev,
                date: convertDayToDateString(initialDate)
            }));
        }
    }, [initialDate, initialTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
        // Reset form after submission
        setFormData({
            name: '',
            class: '',
            status: 'To-Do',
            type: 'Assignment',
            note: '',
            date: ''
        });
        if (onBack) {
            onBack();
        }
    };

    return (
        <div className="create-task-container">
            <div className="create-task-wrapper">
                <button
                    className="create-task-back-button"
                    onClick={onBack}
                >
                    ← Back
                </button>

                <div className="create-task-card">
                    <h1 className="create-task-title">
                        {initialTask ? 'Edit Task' : 'Create New Task'}
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div className="create-task-form-group">
                            <label className="create-task-label">
                                Task Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="create-task-input"
                                placeholder="Enter task name"
                            />
                        </div>

                        <div className="create-task-form-group">
                            <label className="create-task-label">
                                Course/Class *
                            </label>
                            <input
                                type="text"
                                name="class"
                                value={formData.class}
                                onChange={handleChange}
                                required
                                className="create-task-input"
                                placeholder="e.g., CSC209, MAT232"
                            />
                        </div>

                        <div className="create-task-form-group">
                            <label className="create-task-label">
                                Status *
                            </label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                required
                                className="create-task-select"
                                title="Task status"
                            >
                                <option value="To-Do">To-Do</option>
                                <option value="In-Progress">In-Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>

                        <div className="create-task-form-group">
                            <label className="create-task-label">
                                Type *
                            </label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                required
                                className="create-task-select"
                                title="Task type"
                            >
                                <option value="Assignment">Assignment</option>
                                <option value="Quiz">Quiz</option>
                                <option value="Exam">Exam</option>
                                <option value="Weekly">Weekly</option>
                            </select>
                        </div>

                        <div className="create-task-form-group">
                            <label className="create-task-label">
                                Due Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="create-task-input"
                                title="Due date"
                                placeholder=""
                            />
                        </div>

                        <div className="create-task-form-group create-task-form-group-last">
                            <label className="create-task-label">
                                Note
                            </label>
                            <textarea
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                rows="3"
                                className="create-task-textarea"
                                placeholder="Additional notes..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="create-task-submit"
                        >
                            {initialTask ? 'Update Task' : 'Create Task'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
