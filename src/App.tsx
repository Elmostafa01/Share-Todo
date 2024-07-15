import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {

  return (
    <div className="font-sans min-h-screen bg-black">
      <main className='max-w-3xl min-h-screen mx-auto text-text flex flex-col items-center'>
        <Navbar />
        <Content /> 
      </main>
    </div>
  )
}

export default App
