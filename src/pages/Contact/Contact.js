import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../styles/contact.module.css";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_61ya5o4",
        "template_n1c3ucd",
        form.current,
        "ZerahYNpS_PwWoB6n"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          toast.success('Successfully submitted form');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className={`${styles.ContactheroBg}  flex py-[200px] justify-start items-center`}
    >
      <div className="md:flex w-full px-4 xl:w-[80%] mt-[100px]  mx-auto gap-6">
        <div className="w-full bg-[#B5986D] py-14 px-14 rounded-xl md:w-[50%]">
          <div className="border-[2px] py-10 px-10 border-[#bf9f1d]">
            <h1 className="text-[40px] text-center leading-[45px] md:text-[50px] md:leading-[60px]">
              Contact Us
            </h1>

            <form ref={form} onSubmit={sendEmail} action="">
              <div className="py-20">
                <input
                  type="text"
                  className="placeholder:text-[#bf9f1d] text-[#bf9f1d] placeholder:text-[22px] py-8 px-6 rounded-xl w-full bg-white"
                  placeholder="Your Name"
                  name="user_name"
                />
                <input
                  type="email"
                  className="placeholder:text-[#bf9f1d] placeholder:text-[22px] text-[#bf9f1d] py-8 px-6 rounded-xl my-10 w-full bg-white"
                  placeholder="Your Email"
                  name="user_email"
                />
                <textarea
                  className="w-full px-6 placeholder:text-[#bf9f1d] text-[#bf9f1d] rounded-xl placeholder:text-[22px] py-6 bg-white"
                  placeholder="Your words are all we need"
                  name="message"
                  id=""
                  cols="30"
                  rows="7"
                ></textarea>
                <div className="text-center pt-10">
                  <input
                    type="submit"
                    value="Send it"
                    className="text-white rounded-xl text-[20px] font-normal leading-[30px] bg-[#021222] py-10 px-10 w-[80%] "
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={`${styles.subcBg} w-full px-6 md:w-[50%]`}>
          <div className="sm:w-[80%] mx-auto py-20">
            <h4 className="text-[40px]  leading-[45px] md:text-[50px] md:leading-[60px]">
              Hind & PB Lounge
            </h4>
            <h4 className="text-[22px] py-10 leading-[25px] md:text-[30px] md:leading-[30px]">
              49 London Road, Centre
            </h4>
            <h4 className="text-[22px]   leading-[25px] md:text-[30px] md:leading-[30px]">
              Leicester LE2 0PD
            </h4>

            <div className="py-20">
              <h4 className="text-[22px]   leading-[25px] md:text-[30px] md:leading-[30px]">
                Email :
              </h4>
              <p className="text-[20px] py-4 text-white ">
                support@passionblendbar.co.uk
              </p>
            </div>
            <h4 className="text-[22px]  leading-[25px] md:text-[30px] md:leading-[30px]">
              Phone Numbers:
            </h4>
            <p className="text-[20px] py-4  text-white">
              Land Line - 01162545892
            </p>
            <p className="text-[20px]  text-white">Mobile -  07466970736</p>
          </div>
        </div>
      </div>
      <Toaster />

    </div>
  );
};

export default Contact;
