// ...existing code...

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import logo from '../public/octofitapp-small.svg';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
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
