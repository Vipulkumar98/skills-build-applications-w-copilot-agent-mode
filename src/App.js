// ...existing code...

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import logo from './octofitapp-small.svg';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark modern-navbar mb-4 rounded shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
              <img src={logo} alt="Octofit Logo" className="octofit-logo me-2" />
              Octofit Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/activities">Activities</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/leaderboard">Leaderboard</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/teams">Teams</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/users">Users</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/workouts">Workouts</NavLink></li>
              </ul>
              <div className="d-flex align-items-center">
                <span className="me-2 text-light fw-semibold">Hi, Guest</span>
                <div className="dropdown">
                  <button className="btn btn-outline-light rounded-circle p-0 profile-btn" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="profile-avatar" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                    <li><button className="dropdown-item" type="button">Profile</button></li>
                    <li><button className="dropdown-item" type="button">Settings</button></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" type="button">Logout</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="text-center"><h1 className="display-4 mb-4">Welcome to Octofit Tracker!</h1><p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
