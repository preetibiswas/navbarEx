
import './index.css'
import Newnav from './Component/NewNav/Newnav'
// import ResponsiveNav from './Component/ResponsiveNav/ResponsiveNav'
import { BrowserRouter } from 'react-router-dom'


function App() {


  return (
   <BrowserRouter>
   {/* <ResponsiveNav/> */}
   <Newnav/>
   
   </BrowserRouter>
  )
}

export default App
