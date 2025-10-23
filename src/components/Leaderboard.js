import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  // Demo/mock data for development
  const demoData = React.useMemo(() => [
    { id: 1, name: 'Alice', points: 1200, team: 'OctoFitters' },
    { id: 2, name: 'Bob', points: 1100, team: 'FitSquad' },
    { id: 3, name: 'Charlie', points: 950, team: 'OctoFitters' },
    { id: 4, name: 'Dana', points: 900, team: 'FitSquad' },
    { id: 5, name: 'Eve', points: 850, team: 'OctoFitters' },
  ], []);

  useEffect(() => {
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        if (Array.isArray(results) && results.length > 0) {
          setLeaderboard(results);
        } else {
          setLeaderboard(demoData);
        }
        console.log('Fetched leaderboard:', results);
      })
      .catch(err => {
        console.error('Error fetching leaderboard:', err);
        setLeaderboard(demoData);
      });
  }, [endpoint]);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-success">Leaderboard</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-light">
              <tr>
                {leaderboard[0] && Object.keys(leaderboard[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, idx) => (
                <tr key={entry.id || idx}>
                  {Object.values(entry).map((val, i) => (
                    <td key={i}>{val !== null ? val.toString() : ''}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {leaderboard.length === 0 && <div className="alert alert-info">No leaderboard data found.</div>}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
