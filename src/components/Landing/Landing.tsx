import './index.scss';
import Info from "./Info";
import Welcome from "./Welcome";

export default function Landing() {

  return (
    <div className="landing-wrapper">
      <Welcome />
      <Info />
    </div>
  )
}
