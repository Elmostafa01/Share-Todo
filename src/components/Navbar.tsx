
function Navbar() {
  return (
    <div className="bg-black w-full flex items-center justify-between px-4 h-16">
      <div className="logo text-xl font-semibold text-secondary cursor-pointer">
        <span>Share</span>
        <span className="text-primary">Todo</span>
      </div>
      <div className="in-out flex items-center gap-4 text-secondary">
        <button>register</button>
        <button className="bg-secondary rounded text-black px-3 py-1 font-semibold hover:bg-text/80">Login</button>
        <button>
            <svg fill="#E5D4B8" width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>Log out</title><path d="M392,80H232a56.06,56.06,0,0,0-56,56V240H329.37l-52.68-52.69a16,16,0,0,1,22.62-22.62l80,80a16,16,0,0,1,0,22.62l-80,80a16,16,0,0,1-22.62-22.62L329.37,272H176V376c0,32.05,33.79,56,64,56H392a56.06,56.06,0,0,0,56-56V136A56.06,56.06,0,0,0,392,80Z"/><path d="M80,240a16,16,0,0,0,0,32h96V240Z"/></svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar
