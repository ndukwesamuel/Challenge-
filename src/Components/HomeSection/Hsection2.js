import exclamation from "../../images/exclamation.png";
import "./Hsection2.css";

let Hsection2_img1 =
  "https://res.cloudinary.com/dkzds0azx/image/upload/v1652279631/oneful/images/russell-dark-new_ybmkj7.jpg";

let dollars =
  "https://res.cloudinary.com/dkzds0azx/image/upload/v1652279791/oneful/images/100dollars_xh9d6k.jpg";

let Testimo =
  "https://res.cloudinary.com/dkzds0azx/image/upload/v1652279791/oneful/images/100dollars_xh9d6k.jpg ";
const Hsection2 = () => {
  return (
    <>
      <div className="Hsection2 container">
        {/*  i'm to dispaly flex in this part  */}
        <div className="Hsection2_flex">
          <div className="Hsection2_flex_1">
            <img src={exclamation} alt="" />
          </div>
          {/* create a border line for  */}
          <div className="Hsection2_flex_2 des_version">
            <p className="Hsection2_flex_2_p1"> Freedom Is Just </p>
            <p className="Hsection2_flex_2_p2"> One Funnel Away </p>
          </div>

          <div className="Hsection2_flex_2 mobile_version">
            <p className="Hsection2_flex_2_p1"> Just One Funnel </p>
            <p className="Hsection2_flex_2_p2"> Can Change Your Life </p>
          </div>
        </div>
        {/*  i'm to dispaly flex in this part 2  for the econd section */}
        <section className="Hsection2_flex_two">
          <div className="container">
            <p>
              <b>From</b>: Russell Brunson
            </p>

            <p>
              <b>Where</b>: Boise, Idaho
            </p>

            <p>
              What does <span> 'One Funnel Away' mean for you...?</span>
            </p>

            <p>For everyone it's different...</p>
            <p>
              For some of you,
              <span className="underline">you're in a job that you hate,</span>
              and you're trying to get out.
            </p>

            <p>
              For others, you are entrepreneurs with your own company...{" "}
              <span className="underline">but you're stuck</span>, and you're
              not sure why!
            </p>

            <p>
              And for others of you, you're looking for that one funnel that
              will help you to <b>have more impact on the world!</b>
            </p>

            <p>
              Before I share with you MY GOAL for this 'One Funnel Away
              challenge for YOU... let me ask you a few questions...
            </p>
          </div>

          {/* this is for the img */}
          <div>
            <img className="img-fluid" src={Hsection2_img1} alt="" />
          </div>
        </section>
        {/* this is the form  */}
        <section className="Hsection2_section_3 container">
          <h2> Please Check All Of The Questions Where Your Answer Is YES! </h2>
          <form className="Hsection2_section_3_form" action="">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Do you want to grow your business online, but you have{" "}
                <span className="underline">NO IDEA where to start?</span>
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Do you have a company that's been successful, but for some
                reason
                <span className="underline"> you're feeling stuck ?</span>
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Do you want{" "}
                <span className="underline"> direct live accessto expert </span>
                who can help you with your funnels, strategy offer, marketing,
                sales and Any question you have ?
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Are you trying to figure out a way to <b>reach more people,</b>{" "}
                or have a{" "}
                <span className="underline">bigger impact on the world?</span>
              </label>
            </div>

            <div class="form-check hSec_form">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Are you{" "}
                <span className="underline">
                  {" "}
                  about to launch your next funnel,{" "}
                </span>
                and want to make sure it's a<b> huge Success</b>
              </label>
            </div>
          </form>
        </section>
        {/* this is the end of th form  */}
        <div className="">
          <p className="Hsection2_p text_center">
            If You Checked ANY Of The Boxes Above, Then I Want To Invite You To
            Join The <b> ' One Funnel Away ' </b> Challenge{" "}
            <span className="underline">And Change Your Business Forever!</span>
          </p>
        </div>

        <div className="Hsection2_p_2_div">
          <p className="Hsection2_p_2">
            So, Here Is How The Challenge Works...
          </p>
        </div>
        <div className="Hsection2_p_3_div">
          <p className="Hsection2_p_3">
            <b>The challenge costs $100 to join.</b> This covers your materials
            during the challenge (more info on this below).
          </p>
        </div>
        <div className="Hsection2_div_img">
          <img className="Hsection2_div_img" src={dollars} alt="" />
        </div>
        <p className="Hsection2_p_3">
          With the One Funnel Away Challenge, we could easily charge $1,000 for
          the full 30 day challenge…{" "}
        </p>
        <p className="Hsection2_p_3_pro">
          {" "}
          Probably even $2,000, or more, but...
        </p>
        <div>
          <p className=" Hsection2_p_2"> All You Pay Is $100! </p>
        </div>
        <div>
          <div className="">
            <img
              className=" Hsection2_div_img_Testimo  img-fluid"
              src={Testimo}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hsection2;
