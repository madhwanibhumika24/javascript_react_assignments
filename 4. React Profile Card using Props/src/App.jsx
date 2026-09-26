import "./App.css";
import profileImage from "./assets/profile.jpeg";

function App() {
  return (
    <div className="page">

      <main className="profile-card">

        <div className="profile-image">
          <img
            src={profileImage}
            alt="Bhumika Madhwani"
          />
        </div>

        <div className="profile-content">

          <h1>Bhumika Madhwani</h1>

          <p className="role">
            Backend Developer
          </p>

          <p className="description">
            Passionate about building reliable, efficient,
            and scalable backend applications.
          </p>

          <button>
            View Profile
          </button>

        </div>

      </main>

      <a
        href="http://127.0.0.1:5500/index.html"
        className="dashboard-link"
      >
        ← Back to Dashboard
      </a>

    </div>
  );
}

export default App;