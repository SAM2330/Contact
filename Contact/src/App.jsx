import './App.css'
import Contact from "./Contact";
import pic from "./assets/pic.jpg"

function App() {
  return (
    <main className="app-shell">
      <Contact
        name="Samuel"
        email="samuel@gmail.com"
        phone="09123j45678"
        profile_picture= {pic}
      />
    </main>
  )
}

export default App
