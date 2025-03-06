import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <article className="container xl:mx-auto mx-4 flex flex-col gap-4">
        <div id="footer-info">
          <a href=""><img src="./images/logo.png" alt="Logo" /></a>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptatibus numquam, dolorem veritatis rerum perspiciatis inventore similique. Perspiciatis voluptatem maiores nemo, explicabo neque inventore debitis molestias ea, atque, eos praesentium.
          </p>
        </div>
        <div id="footer-buttons" className="flex text-white xl:justify-evenly justify-around">
          <div className="flex flex-col">
            <h5>Information</h5>
            <p>About Us</p>
            <p>Classes</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col pb-4">
            <h5>Helpful links</h5>
            <p>Services</p>
            <p>Supports</p>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </article>
    </footer>
  );
};

export default Footer;