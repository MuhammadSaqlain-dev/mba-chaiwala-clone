import React from "react";

const Footer = () => {
  const footerLinks = (element) => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item) => (item.style.opacity = 1));
    allFooterLinks.forEach((item, index) => {
      switch (element) {
        case 0:
          index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
          break;
        case 1:
          index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
          break;
        case 2:
          index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
          break;
        case 3:
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
          break;
        case 4:
          index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
          break;
        case 5:
          index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
          break;
        default:
          item.style.opacity = 1;
          break;
      }
    });
  };

  const linksBacktoNormal = () => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item) => (item.style.opacity = 1));
  };
  return (
    <>
      <footer>
        <h1>
          Let's <br /> #ConnectOnCutting?
        </h1>
        <aside onMouseLeave={() => linksBacktoNormal()}>
          <a
            href="/"
            className="footerLinks"
            onMouseOver={() => footerLinks(0)}
            data-cursorpointermini={true}
          >
            Home
          </a>
          <a
            href="/story"
            className="footerLinks"
            onMouseOver={() => footerLinks(1)}
            data-cursorpointermini={true}
          >
            Story
          </a>
          <a
            href="/media"
            className="footerLinks"
            onMouseOver={() => footerLinks(2)}
            data-cursorpointermini={true}
          >
            Media
          </a>
          <a
            href="/franchise"
            className="footerLinks"
            onMouseOver={() => footerLinks(3)}
            data-cursorpointermini={true}
          >
            Franchise
          </a>
          <a
            href="/events"
            className="footerLinks"
            onMouseOver={() => footerLinks(4)}
            data-cursorpointermini={true}
          >
            Events
          </a>
          <a
            href="/chaiwala-cares"
            className="footerLinks"
            onMouseOver={() => footerLinks(5)}
            data-cursorpointermini={true}
          >
            Chai Wala Cares
          </a>
        </aside>

        <div>
          <h5>EMail:</h5>
          <a href="mailto:info@chaiwala.com">info@chaiwala.com</a>
          <a href="mailto:franchise@chaiwala.com">franchise@chaiwala.com</a>
        </div>

        <div>
          <h5>Phone no.:</h5>
          <a href="tel:+923039847353">0303 9847353</a>
        </div>

        <p>© COPYRIGHT 2022 MBA CHAIWALA. MADE BY MUHAMMAD</p>
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer;
