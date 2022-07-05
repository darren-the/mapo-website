import Hero from './components/Hero/Hero'
import Frames from './components/Frames/Frames'
import Features from './components/Features/Features'
import Experts from './components/Experts/Experts'
import How from './components/How/How'
import Plans from './components/Plans/Plans'
import Faqs from './components/Faqs/Faqs'
import BottomLogo from './components/BottomLogo/BottomLogo'

function App() {
  return (
    <div className="container">
      <Hero />
      <Frames />
      <Features />
      <Experts />
      <How />
      <Plans />
      <Faqs />
      <BottomLogo />
    </div>
  );
}

export default App;
