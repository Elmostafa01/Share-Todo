
function Todos() {
  return (
    <div className="mt-6 pb-10">
      <ul className="flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i} className="bg-gray transition-all border border-secondary/30 cursor-pointer rounded-xl px-4 py-4 flex items-center justify-between gap-4">
              <label className='flex items-center gap-2'>
              <div className="checkbox-wrapper-12">
                <div className="cbx">
                    <input  type="checkbox" id="cbx-12" />
                    <label htmlFor="cbx-12"></label>
                    <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                    </svg>
                </div>              
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                    <filter id="goo-12">
                        <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                        <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
                    </filter>
                    </defs>
                </svg>
              </div>
                  <span className='cursor-pointer w-[20rem] text-sm md:text-base'>
                    {` task ${i + 1}`}
                  </span>
              </label>
              <button className='delete bg-black/30 hover:bg-black/90 p-1 rounded-full active:scale-90 transition-all'>
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Iconly/Curved/Delete">
                      <g id="Delete">
                      <path id="Stroke 1" d="M18.8892 9.5542C18.8892 17.5732 20.0435 21.198 12.2797 21.198C4.5149 21.198 5.693 17.5732 5.693 9.5542" stroke="#E5D4B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 3" d="M20.3651 6.47985H4.2146" stroke="#E5D4B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 5" d="M15.7148 6.47983C15.7148 6.47983 16.2434 2.71411 12.2891 2.71411C8.33578 2.71411 8.86435 6.47983 8.86435 6.47983" stroke="#E5D4B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      </g>
                  </svg>
              </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
