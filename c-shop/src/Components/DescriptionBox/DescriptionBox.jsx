import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description_box">
      <div className="description_box-navigator">
        <div className="description_box-nav-box">Description</div>
        <div className="description_box-nav-box fade">Review (122)</div>
      </div>
      <div className="description_box-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error optio,
          magni vel delectus autem eos dolorem officia facere quisquam, nihil
          asperiores natus repellendus. Exercitationem eveniet cum ut sequi est
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          illum possimus sunt temporibus sit ab harum numquam, dicta perferendis
          amet quisquam fugiat non quis ipsum exercitationem enim eligendi!
          Suscipit, nam!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
