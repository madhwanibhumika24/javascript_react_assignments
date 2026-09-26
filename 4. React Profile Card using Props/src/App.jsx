import "./App.css";
import ProfileCard from "./components/ProfileCard";
import profileImage from "./assets/profile.jpeg";

function App() {
  return (
    <div className="page">

      <ProfileCard
        name="Bhumika Madhwani"
        role="Backend Developer"
        description="Passionate about building reliable, efficient, and scalable backend applications."
        image={profileImage}
      />

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