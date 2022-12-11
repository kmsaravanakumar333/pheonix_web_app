import React from "react";
import "./ContactUs.css";
import Footer from "../../Components/Footer";

export default function ContactUs() {
  // const initialValues = { fullName: "", email: "", phone: "", message: "" };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   // e.preventDefault();
  // };

  // const handleSubmit = (e) => {
  //   setIsSubmit(true);
  //   setFormErrors(validate(formValues));
  //   e.preventDefault();
  // };

  // useEffect((e) => {
  //   // console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // });
  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.fullName && !values.email && !values.phone && !values.message) {
  //     errors.form = "fill all the fields";
  //   }
  //   if (!values.fullName) {
  //     errors.fullName = "Full name is required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   }
  //   if (!values.phone) {
  //     errors.phone = "Phone number is required";
  //   } else if (values.phone.length < 10) {
  //     errors.phone = "Phone number must be correct";
  //   } else if (values.phone.length > 10) {
  //     errors.phone = "Phone number must be correct";
  //   }
  //   if (!values.message) {
  //     errors.message = "Message is required";
  //   }
  //   return errors;
  // };

  return (
    <div className="contact-us">
      <div className="contact-header-page">
        <div className="contact-header-page-text-box">
          <div className="contact-header-page-title-primary">
            We'd Love to Hear From You
          </div>
          <div className="contact-header-page-title-secondary">
            Whether you're curious about features, a free-trial, or even press -
            We're ready to answer any and all questions.
          </div>
        </div>
      </div>
      <div className="contact-page">
        <div className="location-details">
          <div className="contact-heading">
            <span>CONTACT US</span>
          </div>

          <div className="main-address">
            <div className="contact-address">
              <div className="address-line-1">
                <div className="c-name">
                  <span className="address-title">
                    PHEONIX SOFTWARE SOLUTIONS
                  </span>
                </div>

                <span className="sub-data">
                  Kalkurichi - 626 104
                  <br></br>
                  Virudhunagar
                </span>
              </div>
              <div className="address-line-2">
                <span className="address-title">GET IN TOUCH</span>
                <br></br>
                <div className="phone-tag">
                  <div className="icon-div-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#000000"
                      viewBox="0 0 256 256"
                      className="phone-icon"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <rect
                        x="64"
                        y="24"
                        width="128"
                        height="208"
                        rx="16"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></rect>
                      <line
                        x1="64"
                        y1="56"
                        x2="192"
                        y2="56"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></line>
                      <line
                        x1="64"
                        y1="200"
                        x2="192"
                        y2="200"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></line>
                    </svg>
                  </div>
                  <div className="phone-no">
                    <span className="sub-data">
                      +91 9791770762<br></br>+91 9942027357
                    </span>
                  </div>
                </div>
                <div>
                  <div>
                    <span className="sub-data">
                      pheonixsoftwaresolutions1009@gmail.com
                    </span>
                  </div>
                  <span className="sub-data">
                    Mon-Fri : 09.00 - 17.00 (IST)
                  </span>
                </div>
              </div>
              <div className="address-line-3">
                <span className="address-title">FOLLOW US</span>
                <div className="social-media-icons">
                  <div className="icon-div">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      className="social-icon"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <circle
                        cx="128"
                        cy="128"
                        r="96"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></circle>
                      <path
                        d="M168,88H152a23.9,23.9,0,0,0-24,24V224"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></path>
                      <line
                        x1="96"
                        y1="144"
                        x2="160"
                        y2="144"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></line>
                    </svg>
                  </div>
                  <div className="icon-div">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      className="social-icon"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <circle
                        cx="128"
                        cy="128"
                        r="40"
                        fill="none"
                        stroke="#000000"
                        strokeMiterlimit="10"
                        strokeWidth="16"
                      ></circle>
                      <rect
                        x="36"
                        y="36"
                        width="184"
                        height="184"
                        rx="48"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></rect>
                      <circle cx="180" cy="76" r="12"></circle>
                    </svg>
                  </div>
                  <div className="icon-div">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      className="social-icon"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <rect
                        x="36"
                        y="36"
                        width="184"
                        height="184"
                        rx="8"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></rect>
                      <line
                        x1="120"
                        y1="112"
                        x2="120"
                        y2="176"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></line>
                      <line
                        x1="88"
                        y1="112"
                        x2="88"
                        y2="176"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></line>
                      <path
                        d="M120,140a28,28,0,0,1,56,0v36"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></path>
                      <circle cx="88" cy="80" r="12"></circle>
                    </svg>
                  </div>
                  <div className="icon-div">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      className="social-icon"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <path
                        d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form
                /*onSubmit={handleSubmit}*/ method="post"
                action="https://formsubmit.co/parthibanselvaraj01@gmail.com"
              >
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="FullName"
                    placeholder="Full Name"
                    name="fullName"
                    required
                    // onChange={handleChange}
                    // value={formValues.fullName}
                  />
                  {/* <p className="Errors">{formErrors.fullName}</p> */}
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Enter a valid email address"
                    name="email"
                    required
                    // onChange={handleChange}
                    // value={formValues.email}
                  />
                  {/* <p className="Errors">{formErrors.email}</p> */}
                </div>
                <div className="form-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="Phone"
                    placeholder="Phone No"
                    name="phone"
                    required
                    // onChange={handleChange}
                    // value={formValues.phone}
                  />
                  {/* <p className="Errors">{formErrors.phone}</p> */}
                </div>
                <div className="form-group mb-3">
                  <textarea
                    type="text"
                    className="form-control"
                    id="Message"
                    placeholder="Message"
                    name="message"
                    required
                    // onChange={handleChange}
                    // value={formValues.message}
                  />
                  {/* <p className="Errors">{formErrors.message}</p> */}
                </div>
                {/* <p className="Errors">{formErrors.form}</p> */}
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="submit" value="Send" className="contact-btn">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="location-image"></div>
      </div>
      <Footer />
    </div>
  );
}
