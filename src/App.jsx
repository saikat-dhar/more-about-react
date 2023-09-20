
import './App.css'
import LineCharts from './components/linechart/LineCharts'
import Nav from './components/nav/Nav'
import Priceoptions from './components/priceOptions/Priceoptions'
// import Daisynav from './components/daisyui/Daisynav'

function App() {


  return (
    <>
       <Nav></Nav>
      {/* <Daisynav></Daisynav> */}
       <h1 className='text-6xl text-center bg-amber-700 mt-24'>Vite + React</h1>

      <Priceoptions></Priceoptions>
      <LineCharts></LineCharts>
       
    </>
  )
}

export default App
