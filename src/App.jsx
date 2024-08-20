import Header from './components/Header'
import Footer from './components/Footer'
import Board from './components/board/Board'
function App() {

  return (
    <>
      <div className="m-0 p-0 bg-gray-700 w-full min-h-screen flex flex-col items-center justify-between">
        <Header />
        <Board />
        <Footer />
      </div>
    </>
  )
}

export default App
