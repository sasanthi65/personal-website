import React from "react";

function WorkItems({ item }) {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <a href={item.link} className="work_button" target={"_blank"}>
        Check More <i className="bx bx-right-arrow-alt work_button-cion"></i>
      </a>
    </div>
  );
}

export default WorkItems;
