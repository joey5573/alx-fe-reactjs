import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter"; // ✅ new import

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile
        name="Alice"
        age="25"
        location="New York"
        bio="Loves hiking and photography"
      />
      <Counter /> {/* ✅ render here */}
      <Footer />
    </div>
  );
}

export default App;
