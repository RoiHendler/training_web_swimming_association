import "./howTheAppHelpsUs.scss";

export default function HowTheAppHelpsUs() {
  const data = [
    {
      id: 1,
      img: "assets/problemManIcon.png",
      desc:
        "Until today, there was no database that combines all the swimmers results. Each coach kept and organized the information independently. It was difficult to analyze the information that each coach kept",

        
    },
    {
      id: 2,
      img: "assets/selvpro.jpg",
      desc:
        "The app saves the information and analyzes the swimmers results automatically, making the information accessible to swimmers, coaches and even the swimmers parents. ",
      featured: true,

    },
    {
      id: 3,
      img: "assets/problem-solving.png",
      desc: 
      "In addition, the app has a message board of the swiming association and the swimming group so that all the information is organized in one place. In addition, in the app has a library of instructional videos that include instruction in dry exercises and even exercises to improve swimming style.",

    },
  ];
  return (
    <div className="howTheAppHelpsUs" id="howTheAppHelpsUs">
      <h1>How the app helps us ?</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
            <h4>{d.desc}</h4>
            </div>
            <div className="bottom">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}