import './App.css';
import HeaderSection from './components/headerSection';
import HeroSection from './components/heroSection';
import CategoriesSection from './components/categoriesSection';
import LogosSection from './components/logosSection';
import VacanciesSection from './components/vacanciesSection'

function App() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <LogosSection />
      <CategoriesSection />
      <VacanciesSection />
    </div>
  );
}

export default App;
