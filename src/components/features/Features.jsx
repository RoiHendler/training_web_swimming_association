import { useEffect, useState } from "react";
import FeaturesList from "../featuresList/FeaturesList";
import "./features.scss";
import {
  generalFeatures,
  SwimmerSide,
  CoachSide,
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
      id: "swimmer side",
      title: "Swimmer Side",
    },
    {
      id: "coach side",
      title: "Coach Side",
    },

  ];

  useEffect(() => {
    switch (selected) {
      case "general features":
        setData(generalFeatures);
        break;
      case "swimmer side":
        setData(SwimmerSide);
        break;
      case "coach side":
        setData(CoachSide);
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