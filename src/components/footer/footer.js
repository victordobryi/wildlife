import React from "react";

import logo from '../../img/Frame.svg'
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-block">
      <div className="header__logo footer-block-logo">
      <svg className="header__logo__img" width="70" height="60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.395 2.446c-2.23 4.709-2.738 14.023-1.03 18.9.37 1.058.763 2.326.874 2.82.268 1.196 3.749 9.295 5.144 11.971 1.37 2.627 1.345 2.653-1.283 1.317-3.78-1.921-6.752-5.871-8.05-10.695-.919-3.418-2.046-3.481-1.973-.11.128 5.88 5.098 12.165 12.511 15.822 2.94 1.45 2.09.298 8.659 11.731 2.799 4.873 2.934 5.029 4.35 5.029 1.76 0 2.01-.387 2.998-4.616 1.002-4.287 2.128-8.008 3.334-11.019l.866-2.161-.942-1.292c-.517-.71-1.055-1.293-1.194-1.294-.464-.005-2.572 4.76-3.894 8.805l-1.308 4-1.554-2.27c-1.44-2.103-5.951-10.436-7.065-13.052-3.991-9.377-2.36-20.718 3.465-24.08 2.054-1.186 1.676-2.643-.486-1.876-4.422 1.571-8.43 8.274-8.858 14.816-.097 1.48-1.213-1.13-2.335-5.463C8.472 15.284 8.373 6.677 9.435 3.47 10.39.593 8.68-.265 7.395 2.446zM60.693 1.31c-.119.29-.03 1.542.199 2.782 1.212 6.582.879 12.534-1 17.831-1.307 3.688-1.818 4.473-1.827 2.807-.027-5.366-3.75-11.88-7.992-13.981-3.15-1.561-3.446-.48-.555 2.036 8.037 6.998 6.335 21.124-4.414 36.62l-1.588 2.288-.552-1.904c-1.48-5.107-1.99-6.42-3.914-10.088l-2.073-3.954 1.666-2.017c.917-1.11 2.791-2.698 4.166-3.529 1.374-.83 2.434-1.692 2.355-1.913-.497-1.395-4.226.122-7.712 3.136l-2.421 2.094-2.146-1.922c-2.303-2.063-6.027-4.052-7.191-3.84-1.242.224-1.09 1.022.324 1.692 6.555 3.11 11.224 11.378 14.538 25.744.837 3.628 1.126 4.039 2.837 4.039 1.407 0 1.565-.17 3.767-4.039 1.358-2.385 4.892-8.336 6.183-10.412.493-.792 1.767-1.674 3.858-2.672 6.13-2.924 10.937-8.817 11.906-14.597.684-4.082-.895-4.693-2.007-.777-1.39 4.895-4.78 9.291-8.577 11.125-1.88.908-1.902.732-.328-2.511 7.129-14.69 8.54-24.942 4.532-32.914-.687-1.365-1.704-1.927-2.034-1.124z" fill="#fff"/></svg>
      {/* <img src={logo} className="header__logo__img"></img> */}
        <h1 className="header__logo__title">WILDLIFE</h1>
      </div>
      <ul className="footer-block__list">
        <li className="footer-block__list-item"><a> Articles</a></li>
        <li className="footer-block__list-item"><a>About us</a> </li>
        <li className="footer-block__list-item"><a>Learn more</a> </li>
        <li className="footer-block__list-item-icon">
        <a className="facebook icon" href="https://www.facebook.com/"></a>
        <a className="instagram icon" href="https://www.instagram.com/"></a>
        <a className="pinterest icon" href="https://www.pinterest.com/"></a>
        <a className="telegram icon" href="https://telegram.org/"></a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
