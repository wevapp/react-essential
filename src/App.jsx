// components
import Count from './components/Count.jsx'
import Card from './components/Card.jsx'
import Mapping from './components/Mapping.jsx'
import Filter from './components/Filter.jsx'
import Find from './components/Find.jsx'
import Reduce from './components/Reduce.jsx'
import Some from './components/Some.jsx'
import Fetch from './components/Fetch.jsx'

// Styles
import './App.css'
import Testing from './components/Testing.jsx'

function App() {
  return (
    <>
      {/* <div className='card-main-container'>
        <Card name="Raymond" age="30" gender="Male"/>
        <Card name="Raymond" age="30" gender="Male"/>
        <Card name="Raymond" age="30" gender="Male"/>
        <Card name="Raymond" age="30" gender="Male"/>
      </div> */}
      <Fetch />
    </>
  )
} 

export default App
