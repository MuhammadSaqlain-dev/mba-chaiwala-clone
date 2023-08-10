import "./styles/App.scss";
import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";

import freshtopicimg from "./assets/academy.png";
import freshtopic2img from "./assets/story.png";
import tedTalkimg from "./assets/in-the-news.gif";
import franchiseimg from "./assets/franchise.gif";
import locationsimg from "./assets/locations.png";
import coursesimg from "./assets/academy.png";
import albumimg from "./assets/mba-cares.gif";
import baratimg from "./assets/image1.png";
import chaiwalaimg from "./assets/image3.png";

import "./styles/App.scss";
import "./styles/introvideo.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
import "./styles/misc.scss";
import "./styles/mediaQuery.scss";

import data from "./data/data.json";
import Footer from "./components/Footer";
import Misc from "./components/Misc";
import { useEffect } from "react";

const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";

function App() {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala,
  } = data;

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);

    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);

    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);

  return (
    <>
      <IntroVideo />
      {/* FreshTopic */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnText={freshTopic.btn}
        imgSrc={freshtopicimg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnColor={pink}
        btnBackground={yellow}
      />

      {/* FreshTopic - 2*/}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnText={freshTopic2.btn}
        imgSrc={freshtopic2img}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBackground={yellow}
        btnColor={pink}
      />

      {/* tedTalks*/}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnText={tedTalks.btn}
        imgSrc={tedTalkimg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBackground={pink}
        btnColor={yellow}
      />

      {/* franchise*/}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnText={franchise.btn}
        imgSrc={franchiseimg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBackground={brown}
        btnColor={yellow}
      />

      {/* map*/}
      <Section
        h3={map.heading}
        text={map.text}
        imgSrc={locationsimg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        hasBtn={false}
      />

      {/* courses*/}
      <Section
        h3={courses.heading}
        text={courses.text}
        btnText={courses.btn}
        imgSrc={coursesimg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBackground={pink}
        btnColor={yellow}
        imgSize={"30%"}
      />

      {/* album*/}
      <Section
        h3={album.heading}
        text={album.text}
        btnText={album.btn}
        imgSrc={albumimg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBackground={brown}
        btnColor={yellow}
      />

      {/* barat*/}
      <Section
        h3={barat.heading}
        text={barat.text}
        btnText={barat.btn}
        imgSrc={baratimg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBackground={yellow}
        btnColor={pink}
      />

      {/* chaiWala*/}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnText={chaiwala.btn}
        imgSrc={chaiwalaimg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBackground={brown}
        btnColor={yellow}
      />

      <Footer />
      <Misc />
    </>
  );
}

export default App;
