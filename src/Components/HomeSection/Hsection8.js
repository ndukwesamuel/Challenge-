import "./Hsection8.css";
import Profile from "../Others/Profile";

const Hsection8 = () => {
  return (
    <>
      {/* this is for the flex */}
      <div className="Hsection8">
        <div className="Hsection8_dispay_flex container">
          <div className="Hsection8_dispay_flex_sec1 container">
            {/* <img className="img-fluid" src={two} alt="" /> */}
            <Profile />
          </div>

          <div className="Hsection8_flex_item_2 container">
            <p className="Hsection8_flex_first_p">
              This Challenge Is NOT For Everyone!
            </p>
            <p>
              If you want to watch every day of the challenge, and say “Thanks,
              Russell! That was some great info!”{" "}
            </p>

            <p>
              If you want to watch every day of the challenge, and say “Thanks,
              Russell! That was some great info!”{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hsection8;
