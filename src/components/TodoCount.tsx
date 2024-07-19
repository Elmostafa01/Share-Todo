function TodoCount() {
  return (
    <div className="select-none mt-6 flex items-center justify-around gap-10 border-2 border-secondary/20 rounded-3xl px-10 py-8 w-full">
      <div>
        <p className="font-bold text-2xl">Todo Done</p>
        <p className="font-extralight text-secondary/80">Keep it up</p>
      </div>
      <div className="flex justify-center items-center bg-primary text-black rounded-full p-8">
        <p className="font-bold text-2xl">1/3</p>
      </div>
    </div>
  )
}

export default TodoCount
