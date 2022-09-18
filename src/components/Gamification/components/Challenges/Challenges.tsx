import { useState } from "react";
import CTF1 from "./CTFS/CTF1";
import CTF2 from "./CTFS/CTF2";
import "./index.scss";

export default function Challenges() {
  const [selectedCTF, setSelectedCTF] = useState("2");

  const renderContent = (selectedCTF: string) => {
    switch (selectedCTF) {
      case "1":
        return <CTF1 />
      case "2":
        return <CTF2 />;
    }
  }

  return (
    <div className="challenges-wrapper">
      <select className="challenges__select" value={selectedCTF} onChange={(e) => setSelectedCTF(e.target.value)}>
        <option value="1">CTF #1</option>
        <option value="2">CTF #2</option>
      </select>
      {renderContent(selectedCTF)}
    </div>
  )
}
