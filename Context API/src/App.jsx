import { createContext } from 'react';
import CompA from './components/CompA'

const FirstName = createContext()

function App() {
  return (
      <div>
        <FirstName.Provider value={{fname: 'Usama', lname: 'Zia'}}>
          <CompA/>
        </FirstName.Provider>
      </div>
  );
}

export default App;
export { FirstName }