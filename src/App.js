import './App.css';
import ComponentsA from './components/ComponentsA';
// import FetchData from './components/FetchData';
// import FetchData1 from './components/FetchData1';
import PersonList from './components/PersonList';
//  import NamesList from './components/NamesList';

function App() {
  return (
    <div className="App">
       <h1> Data Fetch API Example</h1>
        {/* <NamesList/>  */}
       <PersonList/>
       {/* <FetchData /> */}
     {/* <FetchData1/> */}
     <ComponentsA />
    </div>
  );
}

export default App;
