function Contact({ name, email, phone, profile_picture }) {
  return (
    <div className="contact-card">
      <img
        className="profile-picture"
        src={profile_picture}
        alt={`${name} profile`}
      />

      <h1>{name}</h1>
      <p className="contact-info">
        <strong>Email:</strong> {email}
      </p>
      <p className="contact-info">
        <strong>Phone:</strong> {phone}
      </p>
    </div>
  )
}

export default Contact;
