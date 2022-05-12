import "./Hsection4.css";
import Profile from "../Others/Profile";
let ofa_small_min =
  "https://res.cloudinary.com/dkzds0azx/image/upload/v1652280374/oneful/images/ofa_small-min_voiicv.png";

let step =
  "https://res.cloudinary.com/dkzds0azx/image/upload/v1652280461/oneful/images/OFA-live-2-min_siccmw.png";
const Hsection4 = () => {
  return (
    <>
      <div className="Hsection4 ">
        <div className="Hsection4_chanll">
          <div className="container">
            <img className="img-fluid" src={ofa_small_min} alt="" />
          </div>

          <div className="container">
            <div className="Hsection4_chanll_div_2 ">
              <p>The First Thing You’ll Get Access To Is The...</p>

              <p>'One Funnel Away' </p>
              <p> CHALLENGE...</p>
            </div>
          </div>
        </div>

        <div className="Hsection4_div">
          <p>
            Led by Trainer{" "}
            <b> Russell Brunson and The ‘One Funnel Away’ Consulting Team,</b>{" "}
            this challenge is designed to help you <b>Customize</b> and{" "}
            <b className="underline">IMPLEMENT</b> your first (or next) funnel
            in just 30 days…
          </p>
        </div>

        <div className="container">
          <div className="Hsection4_step row">
            <div className="Hsection4_step_child col-lg-4">
              <h1>Step #1</h1>
              <img className="img-fluid" src={step} alt="" />

              <h2 className=""> "The Strategy"</h2>

              <p>
                Each day, you will receive a{" "}
                <span className="underline">new mission from Russell,</span>{" "}
                streamed to the private Facebook group.{" "}
              </p>

              <p>
                These private videos will be about 30 minutes long, and will
                give you the strategy you have to master for each step you need
                for success.{" "}
              </p>

              <p>
                You will have the ability to network with and ask questions to
                our coaches as well as others OFA-ers who are also going through
                the challenge with you!
              </p>
            </div>

            <div className="Hsection4_step_child col-lg-4">
              <h1>Step #2</h1>
              <img className="img-fluid" src={step} alt="" />

              <h2> "The Tactics"</h2>

              <p>
                After the stream ends in the Facebook group, you will be given a
                <b>"One Pager" mission document</b> with the exact step by step
                tactics you need to implement to complete that step.
              </p>

              <p>
                There will be videos showing{" "}
                <span className="underline">HOW to implement the strategy</span>{" "}
                as well as a digital workbook to help keep everything clear!
              </p>

              <p>
                These missions will take between 30-60 minutes to complete each
                day.
              </p>
            </div>

            <div className="Hsection4_step_child col-lg-4">
              <h1>Step #3</h1>
              <img className="img-fluid" src={step} alt="" />

              <h2> "Implementation"</h2>

              <p>
                Not only do you get 30 days of daily video coaching and
                accountability…
              </p>

              <p>
                You also <b>LIVE TRAINING SESSIONS DAILY</b> Monday - Friday
                with our expert OFA consultants.
              </p>

              <p>
                On these special live trainings, you get to pick their brains
                and ask ANY question you have about your funnels, strategies,
                your offer, tech challenges, you name it.
              </p>

              <p>
                <b>It’s like having your very own DEDICATED SUPPORT TEAM.</b>
              </p>
            </div>
          </div>
        </div>

        <div className="Hsection4_step_child_mission">
          <p> Here Is Your Mission, </p>
          <p>(Should You Choose To Accept This Challenge…)</p>
        </div>

        <div className="Hsection4_step_Take_action">
          <p>
            Your Challenge Is To <span className="underline">TAKE ACTION</span>{" "}
            And Complete The Tasks Given To You,
          </p>
          <p> Every Day For 30 Days </p>
        </div>

        <div className="container-fluid">
          <div className="row Hsection4___">
            <div className="col-lg-6">
              <div className="">
                <p> Yes, there will be some prep-work involved…</p>

                <p> Yes, there will be homework…</p>

                <p>
                  But every day, you’ll be taking steps toward building your
                  business!{" "}
                </p>

                <p> Our only question for you is…</p>

                <p> “Do YOU Have What It Takes?”</p>

                <p>
                  By the time the challenge is over, you will have a funnel that
                  is <span className="underline">LIVE!</span>
                </p>

                <p>
                  {" "}
                  Not only will we help you figure out what that funnel is, but
                  you’ll have it created and <b>FINISHED</b> by the end of the
                  challenge!
                </p>

                <p>
                  {" "}
                  And, you’ll be able to launch it to the world, generate leads,
                  and turn those leads into customers who buy from you again and
                  again.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="//onefunnelaway.com/hosted/images/2c/80f5d00add11e98db8d9800cf071d1/OFA-Testimonials_Quotes.png"
                alt=""
              />

              <div>
                {" "}
                <Profile />{" "}
              </div>
              <div>
                {" "}
                <Profile />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="Hsection3_join_Challenge   ">
          <p className="Hsection3_join_Challenge_p1">
            {" "}
            Join The Challenge Now!{" "}
          </p>

          <p className="Hsection3_join_Challenge_p2">
            I Want Daily Training, LIVE Coaching and Accountability, From Day 1
            to Day 30
          </p>
        </div>
      </div>
    </>
  );
};

export default Hsection4;
