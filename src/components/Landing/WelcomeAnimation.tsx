import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

export default function Welcome() {
  const { t } = useTranslation();
  const [helloHatterTyping, setHelloHatterTyping] = useState("");
  const [helloHatterDescriptionTyping, setHelloHatterDescriptionTyping] = useState("");

  const helloHatter = t("#HelloHatter");
  const helloHatterDescription = t("#HelloHatterDescription");
  const timeForChar = 10;
  let i = 0;
  let j = 0;

  const animateText = () => {
    typeHelloHatter();
    setTimeout(() => {
      typeHelloHatterDescription();
    }, timeForChar * helloHatter.length);
  };

  const typeHelloHatter = () => {
    if (i > helloHatter.length) return;
    setHelloHatterTyping(helloHatter.substring(0, i));
    i++;
    setTimeout(() => {
      typeHelloHatter();
    }, timeForChar);
  };
  const typeHelloHatterDescription = () => {
    if (j > helloHatterDescription.length) return;
    setHelloHatterDescriptionTyping(helloHatterDescription.substring(0, j));
    j++;
    setTimeout(() => {
      typeHelloHatterDescription();
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
        {t("#HelloHatter")} <br />
        {t("#HelloHatterDescription")}
      </div>
      <div className="welcome-animation">
        {helloHatterTyping} <br />
        {helloHatterDescriptionTyping}
      </div>
    </div>
  );
}
