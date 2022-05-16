import { useEffect, useState } from "react";
import CountDown from "../CountDown/CountDown";

let Hsection1_img =
  "https://res.cloudinary.com/dkzds0azx/image/upload/v1652279294/oneful/images/bord2_grrhsc.png";

let main_vid =
  "https://res.cloudinary.com/dkzds0azx/video/upload/v1652279055/oneful/video/Covenants_soqpyn.mp4";

const Hsection1 = ({ countdownTimestampMs }) => {
  return (
    <>
      <div>
        <div className="HSec1"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 Hsection1_row_1 ">
              <video className="img-fluid Hsection1_vidoe_div" controls>
                <source src={main_vid} type="video/mp4" />
              </video>

              <p>
                The Life You Want, The
                <span className="underline"> Marriage</span> You Want... The
                <span className="underline"> Family </span> That You Want, Is
                Going To Be <b> Fueled By The Business You Build</b>
              </p>
            </div>

            <div className="col-md-5 Hsection1_ test">
              <div className="Hsection1_div">
                <p className="Hsection1_div_p1">
                  The Next 'ONE FUNNEL AWAY' Challenge Starts On Apr 4th...
                </p>
                <div>
                  <img
                    className="Hsection1_bord2_img img-fluid"
                    src={Hsection1_img}
                    alt=""
                  />
                </div>

                <div>
                  <CountDown />
                </div>

                <p>Registration Ends Apr 3rd At 10PM ET! </p>

                <p className="Hsection1_P">
                  Join The Challenge Now For A One-Time Discounted Payment Of
                  Only $100
                </p>

                <div className="btn btn_live btn_inLAp">
                  <p className="btn_live_p1">Join The Challenge Now!</p>
                  <p className="btn_live_p2">
                    {" "}
                    I Want Daily Training, LIVE Coaching and Accountability,
                    From Day 1 to Day 30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hsection1;
