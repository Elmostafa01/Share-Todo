import Input from "./Input"
import TodoCount from "./TodoCount"
import Todos from "./Todos"

function Content() {
  return (
    <div className="flex flex-col gap-4 relative">
      <TodoCount />
      <Input />
      <Todos />
    </div>
  )
}

export default Content
