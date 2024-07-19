
function Input() {
  return (
    <div className="mt-6 flex  items-center gap-4 px-4">
      <input type="text" 
      className="block w-full text-text placeholder:text-text/50 focus:outline-gray
      bg-gray px-5 py-3 text-gray-900 outline-none hover:bg-gray/80 rounded-2xl transition-all"
      placeholder="What needs to be done?" 
      />
      <button className="bg-primary px-4 py-2 flex items-center justify-center rounded-full
       text-black text-2xl font-bold hover:bg-primary-lighted active:scale-90 transition-all">
        +
      </button>
    </div>
  )
}

export default Input
