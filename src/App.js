import Homepage from './pages/Homepage/Homepage';
import OurValues from './pages/OurValuesPage/OurValues';
import Services from './pages/Services/Services';
import Campaigns from './pages/CampaignsPage/Campaigns';
import Calculations from './pages/CalculationPage/Calculations';
import Partners from './pages/PartnersPage/Partners';
import UsefulInfoPage from './pages/UsefulInfoPage/UsefulInfoPage';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <>
      <Homepage />
      <OurValues />
      <Services />
      <Campaigns />
      <Calculations />
      <Partners />
      <UsefulInfoPage />
      <Footer />
    </>
  );
}

export default App;