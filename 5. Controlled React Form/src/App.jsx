import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleClear() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });

    setSubmitted(false);
  }

  return (
    <div className="page">
      <main className="form-container">

        <div className="form-header">
          <h1>Student Information</h1>
          <p>Enter your details and view them instantly</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="course">Course</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select your course</option>
              <option value="MCA">MCA</option>
              <option value="BCA">BCA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Submit
            </button>

            <button
              type="button"
              className="clear-btn"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>

          {submitted && (
            <div className="success-message">
              Form submitted successfully.
            </div>
          )}
        </form>

        <section className="preview">
          <div className="preview-header">
            <h2>Entered Information</h2>
            <span>Live Preview</span>
          </div>

          <div className="preview-item">
            <span>Name</span>
            <strong>{formData.name || "—"}</strong>
          </div>

          <div className="preview-item">
            <span>Email</span>
            <strong>{formData.email || "—"}</strong>
          </div>

          <div className="preview-item">
            <span>Phone</span>
            <strong>{formData.phone || "—"}</strong>
          </div>

          <div className="preview-item">
            <span>Course</span>
            <strong>{formData.course || "—"}</strong>
          </div>

          <div className="preview-item message-preview">
            <span>Message</span>
            <strong>{formData.message || "—"}</strong>
          </div>
        </section>

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