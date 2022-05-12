import "./Hsection5.css";
let ofa_small_min =
  "https://res.cloudinary.com/dkzds0azx/image/upload/v1652280374/oneful/images/ofa_small-min_voiicv.png";
const Hsection5 = () => {
  return (
    <div className="Hsection5">
      {/* this is a flex div */}
      <div className="Hsection5_section_1">
        <div>
          <img className="img-fluid" src={ofa_small_min} alt="" />
        </div>

        <div className="Hsection5_section_1_sec_2">
          <p>Get These AMAZING Bonuses... </p>
          <p>When You Join The "One Funnel Away" Challenge Today... </p>
        </div>
      </div>
    </div>
  );
};

export default Hsection5;
