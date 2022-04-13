import Welcome from "./components/Welcome/Welcome";
import Projects from './components/Projects/Projects';
import TheStaker from './components/TheStaker/TheStaker';
import TheHacker from './components/TheHacker/TheHacker';
import TheProject from './components/TheProject/TheProject';
import Footer from "../Footer/Footer";
import './index.scss';

export default function Landing() {
  return (
    <div className="landing-wrapper">
      <Welcome />
      <Projects />
      <TheStaker />
      <TheHacker />
      <TheProject />
      <Footer />
    </div>
  )
}
