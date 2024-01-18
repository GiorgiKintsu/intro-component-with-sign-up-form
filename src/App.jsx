import './App.css'
import Advertisement from './Components/Advertisement/Advertisement'
import FormDiv from './Components/FormDiv/FormDiv'
import Offer from './Components/Offer/Offer'


function App() {

  return (
    <div className='mainWrapper'>
      <Advertisement />
      <aside className='rightSide'>
        <Offer />
        <FormDiv />
      </aside>
    </div>
  )
}

export default App
