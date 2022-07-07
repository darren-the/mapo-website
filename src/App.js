import Hero from './components/Hero/Hero'
import Frames from './components/Frames/Frames'
import Features from './components/Features/Features'
import PM from './components/PM/PM'
import Plans from './components/Plans/Plans'
import Faqs from './components/Faqs/Faqs'
import BottomLogo from './components/BottomLogo/BottomLogo'

function App() {
  return (
    <div className="container">
      <Hero />
      <Frames />
      <PM />
      <Features />
      <Plans />
      <Faqs />
      <BottomLogo />
    </div>
  );
}

export default App;
