// import logo from "./logo.svg";
// import "./App.css";
// import Row from "./Row.js";

// function App() {
//   return (
//     <>
//       <div className="App">
//         {/* {movies.map((item) => reu)} */}
//         <Row title="App" name="Meena" />
//         <Row title="NetFlix Originals" />
//         <Row title="Movies" />
//         <Row name="Meena" />
//         <Row name="Sakthi" />
//       </div>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Main from "./Main";

import "./App.css";
import Nav from "./Nav";
import SearchResults from "./SearchResults";
import { SearchProvider } from "./SearchContext";

// import {a,b} from "./Row";
//  destructuring
// {a:{}, b:{}}

function App() {
  // state variable
  // method to set that state variable
  return (
    <div className="App">
      <SearchProvider>
        <Nav />
        <Main />
        <SearchResults />
      </SearchProvider>
    </div>
  );
}

export default App;

// function App() {
//   return <Main />;
// }

// export default App;
