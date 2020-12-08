import './App.scss';
import payload01 from './simplepayload_01.json';
import { useState, useEffect } from 'react';
import mdrNgin from './mesozoicDecapodRevolutionEngine/mdrEngine';


function App() {
  const [componentToBuild, setComponentToBuild] = useState(0);

  const builderNgineBoi = async() => {
    const component = await mdrNgin(payload01);
    console.log('builder_component', component)
    setComponentToBuild(component);
  };

  useEffect(() => {
    builderNgineBoi();
  }, []);

  return (
    <div className="App credicard">
      { componentToBuild }
    </div>
  );
}

export default App;
