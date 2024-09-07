import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* description */}
        <div className="services-description-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio enim
            necessitatibus impedit eum sunt dicta ad, alias ducimus maiores,
            repellendus nihil nesciunt quisquam, consequuntur nulla. Eligendi ad
            facilis voluptatum sint. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse id rerum beatae perspiciatis quibusdam
            perferendis expedita delectus? Iste non atque temporibus at
            provident, vero laudantium ipsum tenetur magnam. Quam, iure.
          </p>
          <button>Hire Me</button>
        </div>
        {/* items */}
        <div className="services-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-description">
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas delectus, necessitatibus voluptate id libero similique
                eum ducimus cupiditate suscipit architecto dolorem fugit eveniet
                ex alias nemo. Quisquam laboriosam molestiae iste.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-description">
              <h3>Desktop Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas delectus, necessitatibus voluptate id libero similique
                eum ducimus cupiditate suscipit architecto dolorem fugit eveniet
                ex alias nemo. Quisquam laboriosam molestiae iste.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-description">
              <h3>U/X Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas delectus, necessitatibus voluptate id libero similique
                eum ducimus cupiditate suscipit architecto dolorem fugit eveniet
                ex alias nemo. Quisquam laboriosam molestiae iste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
