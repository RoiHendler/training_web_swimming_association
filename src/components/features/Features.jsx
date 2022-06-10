import { useEffect, useState } from "react";
import FeaturesList from "../featuresList/FeaturesList";
import "./features.scss";
import {
  generalFeatures,
  analysisResults,
  mobilePortfolio,
} from "../../data";

export default function Features() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "general features",
      title: "General Features",
    },
    {
      id: "analysis results",
      title: "Analysis Training Results",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },

  ];

  useEffect(() => {
    switch (selected) {
      case "general features":
        setData(generalFeatures);
        break;
      case "analysis results":
        setData(analysisResults);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      default:
        setData(generalFeatures);
    }
  }, [selected]);

  return (
    <div className="features" id="features">
      <h1>Features in the app</h1>
      <ul>
        {list.map((item) => (
          <FeaturesList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}