import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const  App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [taskItems, setTaskItem] = useState([ 
    {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true, 
}, 
{
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
},
{
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
}
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = { id, ...task }
  setTaskItem([...taskItems, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTaskItem(taskItems.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTaskItem(
    taskItems.map((task) => 
      task.id === id ? { ...task, remiinder:
      !task.reminder } : task
    )

  )
}


  return (
    <div className="container">
      <Header 
       onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask} 
      />

      {showAddTask && <AddTask onAdd={addTask} />}
      
      {taskItems.length > 0 ? ( 
        <Tasks taskItems={taskItems} 
        onDelete= {deleteTask} 
        onToggle={toggleReminder} /> ) : ('No Task to Show')}
    </div>
  );
}

export default App;
