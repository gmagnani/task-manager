import { Toaster } from 'sonner'
import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Tasks />
      <Toaster toastOptions={{
        style: {
          color: "#35383e"
        }
      }}/>
    </div>
  )
}

export default App
