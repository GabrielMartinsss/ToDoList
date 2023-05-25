import style from './StatusTasks.module.css'

interface Task {
  id: number
  task: string
  completed: boolean
}

interface StatusTasksProps {
  tasks: Task[]
}

export function StatusTasks({tasks}: StatusTasksProps) {
  let tasksCompletedAmount = 0

  tasks.map(task => {
    if (task.completed === true ) {
      tasksCompletedAmount += 1
    }
  })
  
  return ( 
    <div className={style.status}>
      <p>
        Tarefas criadas
        <span>{tasks.length}</span>
      </p>
      <p>
        Concluídas
        <span>{tasksCompletedAmount} de {tasks.length}
        </span>
      </p>
    </div>
  )
}