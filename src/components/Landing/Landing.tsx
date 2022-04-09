import { useContext } from 'react';
import Welcome from "./components/Welcome/Welcome";
import TheStaker from './components/TheStaker/TheStaker';
import TheHacker from './components/TheHacker/TheHacker';
import TheProject from './components/TheProject/TheProject';
import Footer from "../Footer/Footer";
import { LayoutContext } from '../../App';
import { ScreenSize } from '../../constants/constants';
import './index.scss';

export default function Landing() {
  const { screenSize } = useContext(LayoutContext);

  return (
    <div className="landing-wrapper">
      <Welcome />
      <TheStaker />
      <TheHacker />
      <TheProject />
      {screenSize === ScreenSize.Desktop && <Footer />}
    </div>
  )
}
