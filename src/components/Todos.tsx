import {
  type ListOfTodos,
  type TodoId,
  type TodoIdAndCompleted,
} from '../types'
import { Todo } from './Todo'
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: TodoIdAndCompleted) => void
}

export const Todos = ({
  todos = [],
  onRemoveTodo,
  onToggleCompleteTodo,
}: Props) => {
  
  const [parent] = useAutoAnimate()

  return (
    <ul className="todo-list" ref={parent}>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleteTodo={onToggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  )
}
