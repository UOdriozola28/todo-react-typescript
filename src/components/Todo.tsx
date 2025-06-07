import {
  type TodoId,
  type TodoIdAndCompleted,
  type Todo as TodoType,
} from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: TodoIdAndCompleted) => void
}

export function Todo({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo,
}: Props) {
  return (
    <div className="view">
      <input
        type="checkbox"
        checked={completed}
        className="toggle"
        onChange={() => {
          onToggleCompleteTodo({ id, completed: !completed })
        }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}
