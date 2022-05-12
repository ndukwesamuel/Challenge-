import board from "../../images/bord2.png";
import step from "../../images/step.png";
import daysbook from "../../images/30daysbook.jpg";
import onepage_computer_min from "../../images/onepage_computer-min.png";
import OFA_Testimonials_1_1_min from "../../images/OFA-Testimonials_1.1-min.png";
import triangle2 from "../../images/triangle2.png";
import "./Hsection7.css";
import Profile from "../Others/Profile";

const Hsection7 = () => {
  return (
    <>
      <div className="Hsection7">
        <div className=" Hsection7_Sec_one">
          <div className="Hsection7_Sec_one_img">
            <Profile />
            <Profile />
            <Profile />
          </div>
        </div>

        <div className="Hsection7_Sec_two">
          <p> The One Funnel Away Challenge Is Different!</p>

          <div>
            <img className="img-fluid" src={triangle2} alt="" />
          </div>

          <div className="Hsection7_Sec_two_p">
            <p>
              The One Funnel Away Challenge is NOT just some “course” that
              you’ll never use…
            </p>

            <p>
              It combines the right marketing
              <span className="bold_blue"> KNOWLEDGE… </span>
            </p>

            <p>
              With the SHOVE you need to{" "}
              <span className="bold_blue"> EXECUTE </span> your funnel…
            </p>

            <p>
              And a “no-excuses”{" "}
              <span className="bold_blue"> ACCOUNTABILITY </span> team of
              coaches who are caring and supportive, while making sure that you
              get your tasks done…
            </p>
            <p>
              That’s the biggest challenge in getting your first (or next)
              funnel started…
            </p>

            <p>It’s almost NEVER a lack of knowledge that’s the problem...</p>

            <p className="bold_blue increas_bold ">
              {" "}
              It’s a lack of EXECUTION…
            </p>
            <p>(or, not executing the right way). </p>
          </div>
        </div>
      </div>

      <div className="Hsection7_sec">
        <img className="img-fluid" src={board} alt="" />
        <div className=" Hsection3_join_Challenge   ">
          <p className="Hsection3_join_Challenge_p1">
            {" "}
            Join The Challenge Now!{" "}
          </p>

          <p className="Hsection3_join_Challenge_p2">
            I Want Daily Training, LIVE Coaching and Accountability, From Day 1
            to Day 30
          </p>
        </div>

        <div className=" Hsection7_sec_p container">
          <p>
            As you can probably see,
            <span className="bold_blue">
              {" "}
              getting access to the 'One Funnel Away' challenge
            </span>{" "}
            is like having me, and my entire OFA Expert Consulting Team as your
            own personal funnel coaches!
          </p>
          <p>
            The only difference is that you couldn't buy a 1 hour consulting
            call with me for $100.
          </p>
          <p>
            In fact, right now the CHEAPEST you can hire me to "pick my brain"
            is $100,000 for a day.
          </p>
          <p>So, to get 30 days with all of us, for just $100 is crazy!</p>
          <p>
            Yet{" "}
            <span className="bold_blue underline">
              you get everything we talked about above for FREE when you join
              the 'One Funnel Away' challenge today!
            </span>
          </p>
          <p>
            So, are you excited yet!?!{" "}
            <span className="bold_blue">
              {" "}
              If so, then NOW is the time to take action!
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hsection7;
