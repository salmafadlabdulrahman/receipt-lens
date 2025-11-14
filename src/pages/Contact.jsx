import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import contactImg from "/src/receipt-contact-2.jpg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationPinIcon from "@mui/icons-material/LocationPin";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="pb-[3em]">
      <div className="contact-header bg-purple-700 text-center p-10 text-white">
        <h2 className="font-bold text-3xl">Get in Touch</h2>
        <p className="mt-2">
          We're here to help with your expenses and subscriptions.
        </p>
      </div>

      <section className="xl:flex xl:justify-around">
        <div className="form-container text-center mt-[1em] md:w-[60%] md:m-auto md:pb-3 md:mt-[2em] px-2 xl:shadow-md xl:w-[40%] xl:m-0 xl:mt-[3em] ">
          <h3 className="text-2xl font-bold">Send us a message</h3>
          <p className="p-2 mt-[.5em] text-[#838383]">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
          <div className="">
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 400,
                margin: "0 auto",
                marginTop: "2em",
              }}
            >
              <TextField
                label="Full Name"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                maxRows={8}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#010c31" }}
              >
                Send a message
              </Button>
            </Box>
          </div>
        </div>

        <section className="lg:flex justify-between mt-[2em] lg:pl-[1em] xl:flex-col xl:shadow-md">
          <div className="contact-info-wrapper text-center lg:text-left  mt-[2em] md:w-[60%] md:m-auto md:pb-3 md:mt-[2em] px-2 xl:order-2  xl:w-full xl:text-left">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="flex gap-[1em] text-left items-center m-auto max-w-[300px] my-[1em] lg:max-w-full xl:max-w-[300px] xl:m-0 xl:my-2 ">
              <EmailIcon />
              <div>
                <p>Email</p>
                <p className="">support@spendright.com</p>
              </div>
            </div>

            <div className="flex gap-[1em]  text-left items-center m-auto max-w-[300px] my-[1em] lg:max-w-full xl:m-0 xl:max-w-[300px] xl:my-2 ">
              <PhoneIcon />
              <div>
                <p>Phone</p>
                <p>+1 (234) 567-890</p>
              </div>
            </div>

            <div className="flex gap-[1em]  text-left items-center m-auto max-w-[300px] my-[1em] lg:max-w-full xl:m-0 xl:max-w-[300px] xl:my-2">
              <LocationPinIcon />
              <div>
                <p>Location</p>
                <p>123 Finance street</p>
              </div>
            </div>

            <div className="text-left max-w-[400px] m-auto md:w-[70%] mt-[2em] lg:w-full lg:m-0 xl:m-auto xl:mt-[2em]">
              <p className="font-bold">Business Hours</p>
              <p className="flex justify-between">
                <span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday</span> <span>10:00 AM - 4:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday</span> <span>Closed</span>
              </p>
            </div>
          </div>

          <div className="md:w-[50%] m-auto mt-[3em] px-2 xl:w-[500px] xl:order-1 xl:mt-0">
            <img
              src={contactImg}
              alt="an image of money and calculator"
              className="w-full rounded-md"
            />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Contact;
