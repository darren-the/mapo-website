import Hero from './components/Hero/Hero'
import Showcase from './components/Showcase/Showcase'
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
      <Showcase />
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
