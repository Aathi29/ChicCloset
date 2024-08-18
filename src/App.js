// import './App.css';
// import ImageUpload from './Firebase/ImageUpload';
// import ProductList from './Firebase/ProductList';
// import SareeCard from './Firebase/SareeCard';
// import Header from './Header/Header.js';
// import Login from './Profile/Login';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Register from './Profile/Register';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Login/>
//       <SareeCard/>
//       <Switch>
//         <Route path="/saree1" component={() => <SareeCard category="banarasisilk" />} />
//         <Route path="/saree2" component={() => <SareeCard category="mysoresilk" />} />
//         <Route path="/saree3" component={() => <SareeCard category="softsilk" />} />
//         {/* Add more routes as needed */}
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import './App.css';
import ImageUpload from './Firebase/ImageUpload';
import ProductList from './Firebase/ProductList';
import SareeCard from './Firebase/SareeCard';
import Header from './Header/Header.js';
import Login from './Profile/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Profile/Register';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/saree1" element={<SareeCard category="banarasisilk" />} />
        <Route path="/saree2" element={<SareeCard category="mysoresilk" />} />
        <Route path="/saree3" element={<SareeCard category="softsilk" />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;



