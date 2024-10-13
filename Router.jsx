
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';  // This is your old landing page
import MainUser from './UserDashBoard/MainUser';  // Importing the new UserDashboard main file

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />  {/* Old landing page */}
                <Route path="/user-dashboard" element={<MainUser />} />  {/* New User Dashboard page */}
            </Routes>
        </Router>
    );
}

export default App;
