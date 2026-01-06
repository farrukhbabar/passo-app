import React, { useState } from "react";
import axios from "axios"
import contactBanner from "../assets/contactBanner.png";
import contactIcon from "../assets/contactIcon.png";
import emailIcon from "../assets/emailIcon.png";


const Contact = () => {

    const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

    const [responseMsg, setResponseMsg] = useState("");
  const [error, setError] = useState(false);

   const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);

      setResponseMsg(res.data.message);
      setError(false);
      setForm({ name: "", email: "", phone: "", message: "" });
       setTimeout(() => setResponseMsg(""), 3000);

    } catch (err) {
      setResponseMsg(err.response?.data?.message || "Something went wrong");
      setError(true);
       setTimeout(() => setResponseMsg(""), 3000);
    }
  };

  return (
    <>
      {/* Contact banner */}
      <div
        className="w-full min-h-[351px] bg-center bg-cover flex flex-col justify-center p-10 md:p-20"
        style={{
          backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0)),
              url(${contactBanner})
            `,
        }}
      >
        <h1 className="font-bold w-full max-w-[1400px] mx-auto text-[45px] md:text-[55px] lg:text-[64px]">
          Contact us Today
        </h1>
      </div>

      {/* Form section */}
      <div className="w-full min-h-[709px] grid grid-cols-1 md:gris-cols-1 lg:grid-cols-2 gap-6 p-10 md:p-20">
        {/* left side */}
        <div className="w-full max-w-[659px] min-h-[552px] mx-auto">
          <h1 className="font-bold text-[30px] md:text-[35px] lg:text-[40px] pb-4 md:pb-6">
            Contact Form
          </h1>
          <form action="submit" onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name*"
              // required
              // pattern="[A-Za-z\s]+"
              className="w-full max-w-[586px] min-h-[50px] rounded-[30px] bg-[#F6F6F6] pl-4 outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              id=""
              placeholder="Phone*"
              // required
              // pattern="^\+?[0-9\s\-]{7,15}$"
              className="w-full max-w-[586px] min-h-[50px] rounded-[30px] bg-[#F6F6F6] pl-4 outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              id=""
              placeholder="Email*"
              // required
              className="w-full max-w-[586px] min-h-[50px] rounded-[30px] bg-[#F6F6F6] pl-4 outline-none"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              id=""
              rows="6"
              color="50"
              placeholder="Message(Please include your vehicle's make and model,tyre size, or any other relevant details.)*"
              // required
              className="w-full max-w-[586px] min-h-[200px] rounded-[20px] bg-[#F6F6F6] pl-4 pt-4 resize-none outline-none"
            ></textarea>
            <div>
              <button
                type="submit"
                className="w-full max-w-[177px] min-h-[50px] rounded-[50px] pt-[13px] pb-[13px] pl-[35px] pr-[35px] border-none bg-[#9FCB09] text-[black] font-bold text-[16px]"
              >
                Submit
              </button>

              {/* response message */}
              <div className="mt-2 h-5  ">
                {responseMsg && (  <p style={{ color: error ? "red" : "black" }}>{responseMsg}</p>)}
              </div>
            </div>
          </form>
        </div>

        {/* Right side */}
        <div className="w-full max-w-[520px] min-h-[400px] md:min-h-[573px] rounded-[40px] mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.014454720956!2d67.06587447545622!3d24.81215167795906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c56e076722d%3A0x633190a618451f16!2sDolmen%20Mall%20Clifton!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "40px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact section */}
      <div className="w-full min-h-[454px] bg-[#F6F6F6] p-10 md:p-20 ">
        <div>
          <p className="font-normal text-[14px] md:text-[16px] text-center pb-[35px] md:pb-[60px]">
            You can also reach us by phone or address:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div className="w-full max-w-[630px] mx-auto flex flex-col items-center justify-center gap-4 min-h-[245px] rounded-[30px] bg-[#9FCB09]">
            <img
              src={contactIcon}
              alt=""
              className="w-[40px] md:w-[45px] lg:w-[50px] h-[40px] md:h-[45px] lg:h-[50px]"
            />
            <p className="font-bold text-[18px] md:text-[20px] lg:text-[22px]">
              00000000000
            </p>
          </div>
          <div className="w-full max-w-[630px] mx-auto flex flex-col items-center justify-center gap-4 min-h-[245px] rounded-[30px] bg-[#9FCB09]">
            <img
              src={emailIcon}
              alt=""
              className="w-[50px] md:w-[55px] lg:w-[60px] h-[50px] md:h-[55px] lg:h-[60px]"
            />
            <p className="font-bold text-[18px] md:text-[20px] lg:text-[22px]">
              example@gamil.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
