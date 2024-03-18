import Customer from './pages/customer';
import Login from './pages/loging';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/singUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/user" element={<SignUp />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;