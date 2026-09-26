function ProfileCard({ name, role, description, image }) {
  return (
    <main className="profile-card">
      <div className="profile-image">
        <img
          src={image}
          alt={name}
        />
      </div>

      <div className="profile-content">
        <h1>{name}</h1>

        <p className="role">
          {role}
        </p>

        <p className="description">
          {description}
        </p>

        <button>
          View Profile
        </button>
      </div>
    </main>
  );
}

export default ProfileCard;