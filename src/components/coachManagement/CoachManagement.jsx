import { useState } from "react";
import "./coachManagement.scss";

export default function CoachManagement() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/writing.png",
      title: "Adding a new exercise and workout to the app",
      desc:
        "Now we will learn to add an exercise to the database in the app and in addition, we will learn how to define training in the app. ",
        img: "assets/homePageScreen.jpeg",
    },
    {
      id: "2",
      icon: "./assets/writing.png",
      title: "Go to the admin panel",
      desc:
        "First, The coach need  go to the admin management panel - This can be done by clicking on the panel button on the profile page",
      img:
        "./assets/CoachManagementBoard.jpeg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Adding a new exercise to the database",
      desc:
        "Now the coach need to add a new exercise to the database. in the last line of the form the coach can choose whether to add the exercise to the personal or public exercise database",
      img:
        "./assets/AddExerciseToPool.jpeg",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Add a workout or test to a group",
      desc:
        "By clicking the Add Workout or Test button in the admin panel, the coach need to add the exercises he wants to do in that workout or test",
      img:
      "./assets/AddWorkoutOrTestToGroup.jpeg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="coachManagement" id="coachManagement">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}