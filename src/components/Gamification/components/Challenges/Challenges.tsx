import Select from "react-select";
import { useCallback, useContext, useState } from "react";
import CTF1 from "./CTFS/CTF1";
import CTF2 from "./CTFS/CTF2";
import "./index.scss";
import { Colors, ScreenSize } from "../../../../constants/constants";
import { LayoutContext } from "../../../../App";

export default function Challenges() {
  const [selectedCTF, setSelectedCTF] = useState<string | undefined>("2");
  const { screenSize } = useContext(LayoutContext);

  const renderContent = useCallback((selectedCTF: string | undefined) => {
    switch (selectedCTF) {
      case "1":
        return <CTF1 />
      case "2":
        return <CTF2 />;
    }
  }, [])

  const selectStyles = {
    menu: (provided: any) => ({
      ...provided,
      border: `1px solid ${Colors.turquoise_1}`,
      borderRadius: "unset",
    }),
    option: (provided: any, state: { isSelected: any; }) => ({
      ...provided,
      backgroundColor: state.isSelected ? Colors.blue_1 : Colors.blue_2,
      color: Colors.white,
      height: "60px",
      display: "flex",
      "&:hover": {
        opacity: "0.8",
      },
      lineHeight: "40px",
    }),
    control: () => ({
      border: `1px solid ${Colors.turquoise_1}`,
      display: "flex",
      color: Colors.white,
      height: "40px",
      width: screenSize === ScreenSize.Desktop ? "160px" : "100%",
    }),
    menuList: () => ({
      padding: "unset",
    }),
    singleValue: (base: any) => ({
      ...base,
      color: Colors.white
    }),
    valueContainer: (base: any) => ({
      ...base,
      display: "flex"
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: Colors.turquoise_2
    })
  }

  const ctfs = [
    {
      value: "1",
      label: <div>CTF #1</div>
    },
    {
      value: "2",
      label: <div>CTF #2</div>
    }
  ]

  return (
    <div className="challenges-wrapper">
      <Select
        defaultValue={ctfs?.[1]}
        components={{ IndicatorSeparator: () => null }}
        styles={selectStyles}
        isSearchable={false}
        onChange={(e) => setSelectedCTF(e?.value)}
        options={ctfs}
      />
      {renderContent(selectedCTF)}
    </div>
  )
}
