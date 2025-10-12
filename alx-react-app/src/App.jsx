import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="John Doe" age="28" location="Nairobi" />
      <Footer />
    </div>
  );
}

export default App;
