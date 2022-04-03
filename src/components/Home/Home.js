import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid md:grid-cols-2 pt-8 px-4">
        <div className="p-4">
          <h3>something</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            repellendus quos adipisci saepe praesentium soluta corrupti
            similique vitae ullam illo?
          </p>
          <button>Live Demo</button>
        </div>
        <div>
          <img
            src={
              "https://img.freepik.com/free-psd/mockup-gaming-laptop-with-rgb-led-keyboard-glow_74058-461.jpg?size=626&ext=jpg&ga=GA1.1.1395737918.1641046705"
            }
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
