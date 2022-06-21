import "./featuresList.scss";

export default function FeaturesList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "featuresList active" : "featuresList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}