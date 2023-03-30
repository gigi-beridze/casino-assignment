import MainCategories from "./components/main-categories/MainCategories"
import Navbar from "./components/navbar/Navbar"
import Slider from "./components/slider/Slider"
import MobileNavbar from "./components/navbar/MobileNavbar"
import slides from './data/slide.json'
import firstProviderJson from './data/first-provider.json'
import SecondProviderJson from './data/second-provider.json'
import Provider from "./components/provider/Provider"
import SecondProvider from "./components/provider/SecondProvider"
import cardItems from './data/card-items.json'
import Card from "./components/UI/Card"

const App = () => {
  return (
    <div className="App">
      <div className="desc">
        <Navbar />
        <MainCategories />
      </div>
      <div className="mobile">
        <MobileNavbar />
      </div>
      <Slider slides={slides} />
      <Provider provider={firstProviderJson} />
      <SecondProvider provider={SecondProviderJson} />
      <Card item={cardItems} />
      <Card item={cardItems} />
    </div>
  )
}

export default App
