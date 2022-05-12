import board from "../../images/bord2.png";
import step from "../../images/step.png";
import daysbook from "../../images/30daysbook.jpg";
import onepage_computer_min from "../../images/onepage_computer-min.png";
import OFA_Testimonials_1_1_min from "../../images/OFA-Testimonials_1.1-min.png";
import two from "../../images/two.png";

import img1 from "../../images/OFA-BUNDLE-Product-mockup2-min.png";
import img2 from "../../images/OFA_Stack.png";
import img3 from "../../images/funnel-auidible-BUMP-Graphic.png";

import { BiDownArrow } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import img4 from "../../images/credit-only.png";

// BiDownArrow

import "./Hsection10A.css";
import { useState } from "react";
import Booking from "../Others/Booking";

const Hsection10 = () => {
  const [first, setfirst] = useState(false);
  const [second, setSecond] = useState(false);

  const Handle_nexts = (e) => {
    e.preventDefault();
    setfirst(true);
    console.log("wroking");
  };

  const Handle_second = (e) => {
    e.preventDefault();
    setSecond(true);

    console.log("wroking");
  };

  const Handle_next = (e) => {
    e.preventDefault();

    console.log("wroking");
  };
  return (
    <>
      <div className="Hsection10">
        <div className="Hsection10_Header">
          <p>Here’s A Recap Of</p>

          <p>EVERYTHING You'll Get FREE</p>

          <p>When You Accept The ‘One Funnel Away’ Challenge Today!</p>
        </div>

        <section className="Hsection10_Section1">
          <div>
            <img
              className="img-fluid Hsection10_Section1_img1"
              id="img_join"
              src={img1}
              alt=""
            />
          </div>

          <div>
            <div>
              <Booking />
            </div>
            {/* 
            <img
              className="img-fluid Hsection10_Section1_img2"
              src={img2}
              alt=""
            /> */}
          </div>

          <p className="text-center Hsection10_Section1_Total_Value ">
            Total Value: <strike> $3,126</strike>{" "}
          </p>

          <p className="Hsection10_Section1_Live">
            If you want to get your funnel LIVE and start building your
            business, then
            <i>
              <u>this</u> is the mission we’re giving you...
            </i>
          </p>

          <div className="Hsection10_Section1_Accept">
            <p>You have 30 Days, starting Apr 18th...</p>
            <p>
              Do <u>YOU</u> Accept
            </p>
          </div>

          <div className="Hsection10_Section1_Join">
            <p> Join The ‘One Funnel Away’ Challenge Today!</p>
            <p>For Only $100</p>
          </div>
        </section>

        <section className="Hsection10_Section2">
          <form action="" method="get">
            <div className="Hsection10_form_step1">
              <div className="Hsection10_form_step1_form_header">
                {" "}
                STEP 1: CONTACT INFO
              </div>

              <div className="step1_input_one">
                <label className="display_block" htmlFor="F_name">
                  Full Name:{" "}
                </label>
                <input
                  className="Hsection10_form_step1_input"
                  type="text"
                  name=""
                  id="F_name"
                  placeholder="Name as  appears on card "
                />
              </div>

              <div className="step1_input_two">
                <label htmlFor="E_name">Email Address:: </label>
                <input
                  className="Hsection10_form_step1_input"
                  type="text"
                  name=""
                  id="F_name"
                  placeholder="Your email address here... "
                />
              </div>

              <div className="step1_input_three">
                <label htmlFor="E_name">Address::: </label>

                <div>
                  <input
                    className="Hsection10_form_step1_input"
                    type="text"
                    name=""
                    id="F_name"
                    placeholder="Full Address... "
                  />
                </div>
              </div>

              <div className="step1_input_four">
                <div>
                  <input
                    className="Hsection10_form_step1_input"
                    type="text"
                    name=""
                    id="F_name"
                    placeholder="City Name... "
                  />
                </div>
              </div>

              <div className="step1_input_five">
                <input
                  className=""
                  type="text"
                  name=""
                  id="F_name"
                  placeholder="Country / Province... "
                />
                <input
                  className=""
                  type="text"
                  name=""
                  id="F_name"
                  placeholder="Zip Code... "
                />
              </div>

              <button
                onClick={Handle_nexts}
                className="Hsection10_form_step1_button"
              >
                NEXT STEP
              </button>
            </div>

            <div className="Hsection10_form_step1">
              <div className="Hsection10_form_step1_form_header">
                {" "}
                STEP 2: PAYMENT INFO
                {/* <BiDownArrow /> */}
              </div>

              {first && (
                <div className="PAYMENT_INFO">
                  <div className="step1_input_one">
                    <label className="display_block" htmlFor="Card_num">
                      Credit Card Number::
                    </label>
                    <input
                      className="Hsection10_form_step1_input"
                      type="text"
                      name=""
                      id="F_name"
                      placeholder=" Card Number "
                    />
                  </div>

                  <div className="step1_input_five">
                    <input
                      className=""
                      type="text"
                      name=""
                      id="F_name"
                      placeholder="Country / Province... "
                    />
                    <input
                      className=""
                      type="text"
                      name=""
                      id="F_name"
                      placeholder="Zip Code... "
                    />
                  </div>
                  <button
                    onClick={Handle_second}
                    className="Hsection10_form_step1_button"
                  >
                    NEXT STEP
                  </button>
                </div>
              )}
            </div>

            <div className="Hsection10_form_step1">
              <div className="Hsection10_form_step1_form_header">
                {" "}
                STEP 3:ALSO WANT MY TRAINING?
                {/* <BiDownArrow /> */}
              </div>

              {second && (
                <div>
                  <div>
                    <img className="img-fluid form_img3" src={img3} alt="" />
                  </div>

                  <div className="Hsection10_form_step1_last">
                    <div className="Hsection10_form_step1_result">
                      <input type="checkbox" name="" id="res" />
                      <label htmlFor="res">
                        Yes Russell! Upgrade My Order Now!
                      </label>
                    </div>

                    <div>
                      <p className="Hsection10_form_P">
                        <span className="Hsection10_form_Span">
                          One Time Offer - Only $37:
                        </span>{" "}
                        People always wonder: "What happens if I build a funnel,
                        and it FLOPS?” Don’t worry (Most people's do the first
                        time...)! At last year’s Funnel Hacking Live, I gave a
                        special workshop called Funnel Audibles. It shows you a
                        simple process to take ANY funnel that’s broken, and
                        turn it from a ‘zero’ to a ‘HERO’! Click YES to get the
                        training, plus the transcripts and companion workbook
                        that will walk you through how to do a funnel audible on
                        your own funnel now for just $37! (This offer is not
                        available ANYWHERE else on the market!)
                      </p>
                    </div>
                  </div>

                  <div className="clearfixMain">
                    <div className="clearfix ">
                      <div className="pull-left ">Item</div>
                      <div className="pull-right">amount</div>
                    </div>

                    <div className="clearfix1 ">
                      <div className="pull-left1 ">
                        ONE FUNNEL AWAY CHALLENGE - Digital Only
                      </div>
                      <div className="pull-right">$100.00</div>
                    </div>

                    <div>
                      <div className="clearfix2  ">
                        <div className="pull-left ">Order Total:</div>
                        <div className="pull-right">$100.00</div>
                      </div>
                    </div>

                    <table></table>
                  </div>
                  <button onClick={Handle_next} className=" sub_but">
                    Yes! Start The One Funnel Away Challenge!
                  </button>
                  <div className="lock_he10">
                    <p>
                      <AiFillLock />
                      By providing us with your information you are consenting
                      to the collection and use of your information in
                      accordance with our
                    </p>
                  </div>
                  <div>
                    <img className="credit_card" src={img4} alt="" />
                  </div>
                </div>
              )}
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Hsection10;
