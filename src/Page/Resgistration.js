import React from "react";

import How from "../images/headline_ofa2-min.png";
import "./Resgistration.css";

import LoginForm from "./LoginForm";

const Resgistration = () => {
  return (
    <>
      <div className="Resgistration">
        <section className="Resgistration_section">
          <div className="Resgistration_section_one">
            <LoginForm />
          </div>

          <div className="Resgistration_section_two">
            <div className="Resgistration_section_two_p">
              <img className="img-fluid" src={How} alt="" />
            </div>
            <div className="Resgistration_section_two_video">
              <video className="img-fluid" controls>
                <source src="/Media/meditationss.mp4" type="video/mp4" />
              </video>
            </div>

            <p className="do_acc">Do You Accept ?</p>

            <div>
              <p> JOin The Challenge Now </p>
              <p>
                I Want Daily Training, LIVE Coaching And Accountability, From
                Day 1 To Day 30
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resgistration;
