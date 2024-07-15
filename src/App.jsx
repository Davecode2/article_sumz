import Hero from "./components/Hero";
import DemoSection from "./components/DemoSection";

import "./App.css";

const App = () => {
  return (
    <main>
     <div className="main">
       <div className="gradient"> 
       </div>
     </div>

     <div className="app">
       <Hero /> 
       <DemoSection/>
     </div>
    </main>
  )
}

export default App