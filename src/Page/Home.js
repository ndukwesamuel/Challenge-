import Hsection1 from "../Components/HomeSection/Hsection1";
import Hsection2 from "../Components/HomeSection/Hsection2";
import Hsection3 from "../Components/HomeSection/Hsection3";
import Hsection4 from "../Components/HomeSection/Hsection4";
import Hsection5 from "../Components/HomeSection/Hsection5";
import Hsection6 from "../Components/HomeSection/Hsection6";
import Hsection7 from "../Components/HomeSection/Hsection7";
import Hsection8 from "../Components/HomeSection/Hsection8";
import Hsection9 from "../Components/HomeSection/Hsection9";
import Footer from "../Components/Footer";
import Hsection11 from "../Components/HomeSection/Hsection11";
import Hang from "../Components/HomeSection/Hang";
import Hsection10 from "../Components/HomeSection/Hsection10A";
import HomeDex from "../Components/Others/HomeDex";
import Homemob from "../Components/Others/Homemob";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="section_one">
        <div className="dex_img">
          <div className="">
            <HomeDex />
          </div>
        </div>
        <div className="mob_img">
          {/* <img className="img-fluid" src={moblie_head} alt="" /> */}

          <div className="">
            <Homemob />
          </div>
        </div>

        <Hsection1 />
      </div>

      <div>
        <div className="other_Section">
          <Hsection2 />
          <Hsection3 />
          <Hsection4 />
          <Hsection5 />
          <Hsection6 />
        </div>
        <div className="other_Section">
          <Hsection7 />
          <Hsection8 />
        </div>

        <div className="other_Section">
          <Hsection9 />
        </div>

        <div className="other_Section">
          <Hsection10 />
        </div>

        <div className="other_Section">
          <Hsection11 />
        </div>
        <Footer />

        <Hang />
      </div>
    </div>
  );
};

export default Home;
