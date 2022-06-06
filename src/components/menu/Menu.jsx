import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#howTheAppHelpsUs">Motivation</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#features">Features</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#coachManagement">Coach management</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
