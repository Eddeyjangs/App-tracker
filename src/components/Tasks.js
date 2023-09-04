import Task from "./Task"

const Tasks = ({ taskItems, onDelete, onToggle }) => {
  return (
    <>
     {taskItems.map((task) => (
    <div key={task.id}>
    <Task  task={task} 
            onDelete={onDelete}
            onToggle={onToggle}  
    />
   </div>
        ))}
    </>
  )
}

export default Tasks