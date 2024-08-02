import React from "react";
import "./Homepage.css";
import HomeButton from "./component/HomeButton";
import { Link } from "react-router-dom";
// import { Navigate, useNavigate } from 'react-router-dom'

function Homepage() {
  // const specificPage = () => Navigate(`/loginpages/login`)

  return (
    <>
      {/* Menu start here */}
      <div className="menu">
        <div className="logo">
          <img src="/SVG.png" alt="SVG.png" /> <p>FormBot</p>
        </div>
        <div className="twobutton">
          <Link to="/login">
            {" "}
            <button id="btn">Sign in</button>{" "}
          </Link>
          {/* <button id='btn2'>Create a FormBot</button> */}
          <Link to="/login"><HomeButton id /></Link>
        </div>
      </div>
      {/* Menu end here */}

      {/* Chatbots start here */}
      <div className="chatbot_main">
        {/* chatbot_top start here */}
        <div className="chatbot_top">
          <div className="chatbot_left">
            <img src="/vectorleft.png" alt="vectorleft.png" />
          </div>
          {/* chatbot_center start here */}
          <div className="chatbot_center">
            <h1>
              Build advanced chatbots <br />
              visually
            </h1>
            <p>
              Typebot gives you powerful blocks to create unique chat
              experiences. Embed them <br />
              anywhere on your web/mobile apps and start collecting results like
              magic.
            </p>
            <button id="chatbot_center_btn">Create a FormBot for free</button>
          </div>
          {/* chatbot_right start here */}
          <div className="chatbot_right">
            <img src="/vectorright.png" alt="vectorright.png" />
          </div>
        </div>

        {/* chatbot_down start here */}
        <div className="chatbot_down">
          <div className="yellow_circle"></div>
          <div className="blue_circle"></div>
          <img src="/Figure.png" alt="figure.png" />
        </div>
      </div>
      {/* Chatbots end here */}

      {/* school form start here */}

      <div className="schoolform">
        <div className="schoolform_top">
          <h1>
            Replace your old school forms <br />
            with <br />
            chatbots
          </h1>
          <p>
            Typebot is a better way to ask for information. It leads to an
            increase in customer satisfaction and retention and multiply by{" "}
            <br />
            3 <br /> your conversion rate compared to classical forms.
          </p>
        </div>
        <div className="schoolform_down">
          <div className="schoolform_down_left">
            {/* wronglogo div start here */}
            <div className="wronglogo_div">
              <img src="/wronglogo.png" alt="wronglogo.png" />
            </div>
            {/* schoolform_ form start here */}
            <div className="schoolform_form">
              <form>
                <div className="name">
                  <label>
                    Full name{" "}
                    <sup>
                      <img src="/star.png" />
                    </sup>
                  </label>{" "}
                  <br />
                  <input type="text" placeholder="Full name" /> <br />
                </div>
                <div className="email">
                  <label>
                    Email{" "}
                    <sup>
                      <img src="/star.png" />
                    </sup>
                  </label>{" "}
                  <br />
                  <input type="email" placeholder="Email" /> <br />
                </div>
                <div className="schoolform_checkbox">
                  <label htmlFor="schoolform-1">
                    What services are you interested in?{" "}
                    <sup>
                      <img src="/star.png" />
                    </sup>{" "}
                  </label>{" "}
                  <br />
                  <input type="checkbox" name="schoolform-1" id="Website Dev" />
                  <label htmlFor="schoolform-2">Website Dev</label> <br />
                  <input
                    type="checkbox"
                    name="schoolform-2"
                    id="Content Marketing"
                  />
                  <label htmlFor="schoolform-3">Content Marketing</label> <br />
                  <input
                    type="checkbox"
                    name="schoolform-3"
                    id="Social Media"
                  />
                  <label htmlFor="schoolform-4">Social Media</label>
                  <br />
                  <input
                    type="checkbox"
                    name="schoolform-4"
                    id="UI/UX Design"
                  />
                  <label htmlFor="schoolform-5">UI/UX Design</label> <br />
                </div>
                <div className="comment">
                  <label>
                    {" "}
                    Additional information{" "}
                    <sup>
                      <img src="/star.png" />
                    </sup>{" "}
                  </label>{" "}
                  <br />
                  <textarea
                    name=""
                    id=""
                    placeholder="Additional information"
                  ></textarea>{" "}
                  <br />
                </div>
                <Link to="/login"><button>Submit</button></Link>
              </form>
            </div>
          </div>
          <div className="schoolform_down_right">
            {/* tryitout and rightwingarrow png  */}
            <img
              className="tryitout_logo"
              src="/tryitout.png"
              alt="tryitout.png"
            />
            <img
              className="rightwingarrow zindex"
              src="/rightwingarrow.png"
              alt="rightwingarrow.png"
            />
            {/* rightlogo div start from here */}
            <div className="rightlogo_div">
              <img src="/rightlogo.png" alt="rightlogo.png" />
            </div>
            {/* school form div start from here */}
            <div className="schoolform_img">
              <img src="/formimage.png" alt="formimage.png" />
            </div>
          </div>
        </div>
      </div>
      {/* school form end here */}

      {/* twoimage  start here */}
      <div className="twoimage_div_main">
        {/* twoimage-up start here */}
        <div className="twoimage_div_up">
          <div className="twoimage_div_up-left">
            <img src="/twoimageup.png" alt="twoimageup.png" />
          </div>
          <div className="twoimage_div_up-right">
            <h1>
              Easy building <br /> experience
            </h1>
            <p>
              All you have to do is drag and <br />
              drop blocks to create your app. <br />
              Even if you have custom needs, <br />
              you can always add custom <br />
              code.
            </p>
          </div>
        </div>
        {/* twoimage-down start here */}
        <div className="twoimage_div_down">
          <div className="twoimage_div_down-left">
            <h1>Embed it in a click</h1>
            <p>
              Embedding your typebot in <br />
              your applications is a walk in <br />
              the park. Typebot gives you <br />
              several step-by-step platform- <br />
              specific instructions. Your <br />
              typebot will always feel "native". <br />
            </p>
          </div>
          <div className="twoimage_div_down-right">
            <img src="/twoimagedown.png" alt="twoimagedown.png" />
          </div>
        </div>
      </div>
      {/* two image div end here */}

      {/* logo-bundle start here */}
      <div className="logobundle">
        <img src="/logobundle.png" alt="logobundle.png" />
        <div className="logobundle_para">
          <h1>Integrate with any platform</h1>
          <p>
            Typebot offers several native integrations blocks as well as
            instructions on <br />
            how to embed typebot on particular platforms
          </p>
        </div>
      </div>
      {/* logo-bundle end here */}

      {/* Realtime start here */}
      <div className="realtime">
        <div className="realtime_contain">
          <h1>Collect results in real-time</h1>
          <p>
            One of the main advantage of a chat application is that you collect
            the user's responses on each question. <br />
            <span>You won't lose any valuable data.</span>
          </p>
        </div>
        <div className="realtime_image">
          <img src="/realtimeimage.png" alt="realtimeimage.png" />
        </div>
      </div>
      {/* Realtime end here */}

      {/* feature start from here */}
      <div className="features">
        <div className="features_contain">
          <h1>And many more features</h1>
          <p>
            Typebot makes form building easy and comes with powerful features
          </p>
          <div className="features_box">
            {/* features_left start here */}
            <div className="features_top">
              <div className="features_div">
                <img src="/./featuresimg/feature1.png" alt="feature1.png" />
                <div className="features_div_contain">
                  <h6 className="features_titles">Hidden fields</h6>
                  <p>
                    Include data in your form URL to segment <br />
                    your user and use its data directly in your <br />
                    form.
                  </p>
                </div>
              </div>
              <div className="features_div">
                <img src="/./featuresimg/feature2.png" alt="feature4.png" />
                <div className="features_div_contain">
                  <h6 className="features_titles">Custom code</h6>
                  <p>
                    Invite your teammates to work on your <br />
                    typebots with you
                  </p>
                </div>
              </div>

              <div className="features_div">
                <img src="/./featuresimg/feature3.png" alt="feature4.png" />
                <div className="features_div_contain">
                  <h6 className="features_titles">Custom code</h6>
                  <p>
                    Reuse your typebots in different parent <br />
                    bots.
                  </p>
                </div>
              </div>
            </div>
            {/* features-bottom start here */}
            <div className="features_bottom">
              <div className="features_div">
                <img src="/./featuresimg/feature4.png" alt="feature4.png" />
                <div className="features_div_contain">
                  <h6 className="features_titles">Custom code</h6>
                  <p>
                    Customize everything with your own <br />
                    Javascript & CSS code
                  </p>
                </div>
              </div>

              <div className="features_div">
                <img src="/./featuresimg/feature5.png" alt="feature4.png" />
                <div className="features_div_contain">
                  <h6 className="features_titles">Custom code</h6>
                  <p>
                    Connect your typebot to the custom URL <br />
                    of your choice
                  </p>
                </div>
              </div>

              <div className="features_div">
                <img src="/./featuresimg/feature6.png" alt="feature4.png" />
                <div className="features_div_contain">
                  <h6 className="features_titles">Custom code</h6>
                  <p>
                    Organize your typebots in specific folders <br />
                    to keep it clean and work with multiple <br />
                    clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature end from here */}

      {/* brand-logo start here */}
      <div className="brand_logo">
        <div className="brand_logo_main">
          <p>Loved by teams and creators from all around the world</p>
          <img src="/brandlogoimg.png" alt="brandlogoimg.png" />
        </div>
      </div>
      {/* brand-logo end here */}

      {/* last-div start from here */}
      <div className="last_div">
        <div className="last_div_main">
          <div className="last_div_main_left">
            <img src="/vectorleft.png" alt="vectorleft.png" />
          </div>
          <div className="last_div_main_center">
            <h1>
              Improve conversion and user engagement <br />
              with FormBots{" "}
            </h1>
            <Link to="/Login"><button id="last_btn">Create a FormBot</button></Link>
            <p>
              No trial. Generous <span id="last_div_id">free</span> plan.
            </p>
          </div>
          <div className="last_div_main_right">
            <img src="/vectorright.png" alt="vectorright.png" />
          </div>
        </div>
      </div>
      {/* last-div end from here */}

      {/* footer start here */}
      <div className="footer">
        <div className="footer_main">
          <div className="footer_1">
            <span id="made">Made with ❤️ by </span>
            <br />
            <p>@cuvette</p>
          </div>
          <div className="footer_2">
            <p>
              Status{" "}
              <span>
                <img src="/squarearrow.png" alt="squarearrow.png" />
              </span>
            </p>
            <p>
              Documentation{" "}
              <span>
                <img src="/squarearrow.png" alt="squarearrow.png" />
              </span>
            </p>
            <p>
              Roadmap{" "}
              <span>
                <img src="/squarearrow.png" alt="squarearrow.png" />
              </span>
            </p>
            <p>Pricing </p>
          </div>
          <div className="footer_3">
            <p>
              Discord{" "}
              <span>
                <img src="/squarearrow.png" alt="squarearrow.png" />
              </span>
            </p>
            <p>
              Github repository{" "}
              <span>
                <img src="/squarearrow.png" alt="squarearrow.png" />
              </span>
            </p>
            <p>
              Twitter{" "}
              <span>
                <img src="/squarearrow.png" alt="squarearrow.png" />
              </span>
            </p>
            <p>
              Lindkedln{" "}
              <span>
                <img src="/squarearrow.png" alt="squarearrow.png" />
              </span>
            </p>
            <p>OSS Friends</p>
          </div>
          <div className="footer_4">
            <p>About</p>
            <p>Contact</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>

      {/* footer end here */}
    </>
  );
}

export default Homepage;
