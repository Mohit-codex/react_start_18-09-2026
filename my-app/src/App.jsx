
import './App.css'
import Components from './components/Components'
import maharanapratap from './assets/maharana pratap.jpg'
import surajmal from './assets/maharaja surajmal.jpg'
import shivaji from './assets/shivaji maharaj.jpg'

function App() {
  return (
    <div className="main_container">
      <Components
        name="Maharana Pratap"
        image={maharanapratap}
        style={{ borderRadius: '10px' }}
        desc="This is an image of Maharana Pratap of Mewar, Rajasthan"
      />
      <Components
        name="Maharaja Surajmal"
        image={surajmal}
        style={{ borderRadius: '10px' }}
        desc="This is an image of Maharaja Surajmal of Bharatpur, Rajasthan"
      />
      <Components
        name="Shivaji Maharaj"
        image={shivaji}
        style={{ borderRadius: '10px' }}
        desc="This is an image of Shivaji Maharaj of Maharashtra"
      />
    </div>
  )
}

export default App
