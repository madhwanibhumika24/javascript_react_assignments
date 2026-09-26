import "./App.css";

function App() {
  return (
    <div className="page">
      <main className="profile-card">
        <div className="profile-image">
          <img
            src="https://i.pravatar.cc/300?img=12"
            alt="Profile"
          />
        </div>

        <div className="profile-content">
          <h1>Alex Johnson</h1>
          <p className="role">Frontend Developer</p>

          <p className="description">
            Passionate about building clean, responsive, and
            user-friendly web applications.
          </p>

          <button>View Profile</button>
        </div>
      </main>

      <a href="../../index.html" className="dashboard-link">
        ← Back to Dashboard
      </a>
    </div>
  );
}

export default App;