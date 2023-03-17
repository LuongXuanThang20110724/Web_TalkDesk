import Button from './component/Button'
import Card from './component/Card'
import Footer from './component/Footer'
import Header from './component/Header'
import Option from './component/Option'
import axios from 'axios'

async function getHome(){

  // exact raw URL, no need to append an extra .json extension
  const { data } = await axios.get('http://localhost:3000');
  
  return data;    
}


const arrCustomer = getHome()
console.log(arrCustomer)

function App() {
  return (
    <div className="App">
      <Header />

      <div className='main-content'>
        Main Content
        {{arrCustomer}}
        <Button />
        <Card />
        <Option />
      </div>

      <Footer />
    </div>
  )
}

export default App
