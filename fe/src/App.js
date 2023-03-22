import Button from './component/Button'
import Card from './component/Card'
import Footer from './component/Footer'
import Header from './component/Header'
import Option from './component/Option'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-content'>
        <Option />
        <Button />
        <Card />
      </div>
      <Footer />
    </div>
  )
}

export default App
