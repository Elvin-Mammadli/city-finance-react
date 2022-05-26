import Calculations from './pages/CalculationPage/Calculations';
import Campaigns from './pages/CampaignsPage/Campaigns';
import Homepage from './pages/Homepage/Homepage';
import OurValues from './pages/OurValuesPage/OurValues';
import Partners from './pages/PartnersPage/Partners';
import Services from './pages/Services/Services';
import UsefulInfoPage from './pages/UsefulInfoPage/UsefulInfoPage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <OurValues />
      <Services />
      <Campaigns />
      <Calculations />
      <Partners />
      <UsefulInfoPage />
    </div>
  );
}

export default App;
