import { Button } from "react-bootstrap";
import "../../Styles/Components/Homepage.scss";
import COMMON_CONSTANTS from "../../Constants/CommonConstants";

const Homepage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center home-page">
      <div>
        <h1 className=" text-uppercase title ">
          {COMMON_CONSTANTS.LABEL.HOME_PAGE.TITLE}
        </h1>
        <hr></hr>
        <h5 className=" secondary-title ">
          {COMMON_CONSTANTS.LABEL.HOME_PAGE.SECONDARY_TITLE}
        </h5>
        <div class="hero-btn">
          <a href="#landing-offer" class="btn btn-clean">
            {COMMON_CONSTANTS.LABEL.BUTTON.READ_MORE}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
