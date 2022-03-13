import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

export default function Welcome() {
  const { t } = useTranslation();
  const [helloHatterTyping, setHelloHatterTyping] = useState("");

  const helloHatter = t("#HelloHatter");
  const timeForChar = 10;
  let i = 0;

  const animateText = () => {
    typeHelloHatter();
  };

  const typeHelloHatter = () => {
    if (i > helloHatter.length) return;
    setHelloHatterTyping(helloHatter.substring(0, i));
    i++;
    setTimeout(() => {
      typeHelloHatter();
    }, timeForChar);
  };

  useEffect(() => {
    setTimeout(() => {
      animateText();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="welcome-animation-wrapper">
      <div className="welcome-animation-content">
        {t("#HelloHatter")}
      </div>
      <div className="welcome-animation">
        {helloHatterTyping}
      </div>
    </div>
  );
}
