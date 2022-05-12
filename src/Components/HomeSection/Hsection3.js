import Booking from "../Others/Booking";
import "./Hsection3.css";

let board =
  " https://res.cloudinary.com/dkzds0azx/image/upload/v1652279294/oneful/images/bord2_grrhsc.png";

const Hsection3 = () => {
  return (
    <>
      <div className="Hsection3">
        <h1 className="Hsection3_h1_1 container">
          Then In Exchange For That Tiny $100 Investment, You Get ALL Of This:
        </h1>

        <div className="Hsection3_div_border ">
          <img src={board} alt="" />

          <div>
            <Booking />
          </div>

          <div>
            <p className="Hsection3_value">
              Total Value: <strike>$3,126</strike>
            </p>

            <p className="Hsection3_p_value">
              {" "}
              If you want to get your funnel LIVE and start building your
              business, then <span className="underline">this</span> is the
              mission we’re giving you...
            </p>

            <p className="Hsection3_p_value_1">
              You have 30 Days, starting Mar 21st...
            </p>

            <p className="Hsection3_p_value_Accept">
              {" "}
              Do <span className="underline">YOU</span> Accept?
            </p>

            <div className="Hsection3_join_Challenge">
              <p className="Hsection3_join_Challenge_p1">
                Join The Challenge Now!{" "}
              </p>

              <p className="Hsection3_join_Challenge_p2">
                I Want Daily Training, LIVE Coaching and Accountability, From
                Day 1 to Day 30
              </p>
            </div>
          </div>
        </div>

        <div className="Hsection3_information container">
          <p> Need More Information Before You Make Your Decision...? </p>

          <p>
            Let Me Break Down All The Awesome Stuff You'll Get When You Join The
            Challenge Today!
          </p>
        </div>
      </div>
    </>
  );
};

export default Hsection3;
