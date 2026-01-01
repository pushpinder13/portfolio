import './App.css';
import './styles/modern-complete.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModernNavBar } from "./components/ModernNavBar";
import { SimpleBanner } from "./components/SimpleBanner";
import { ModernSkills } from "./components/ModernSkills";
import { ModernProjects } from "./components/ModernProjects";
import { Contact } from "./components/Contact";
import { ModernFooter } from "./components/ModernFooter";
import { PageLoader } from "./components/LoadingSpinner";
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="App">
      <ModernNavBar />
      <SimpleBanner />
      <ModernSkills />
      <ModernProjects />
      <Contact />
      <ModernFooter />
    </div>
  );
}

export default App;