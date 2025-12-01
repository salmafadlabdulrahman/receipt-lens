import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import contactImg from "/images-4.jpg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/useAppContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { t, i18n } = useTranslation();
  const { theme } = useAppContext();
  const isArabic = i18n.language === "ar";

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

  const getTextFieldStyle = () => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme === "dark" ? "#838383" : "",
      },
      "&:hover fieldset": {
        borderColor: theme === "dark" ? "#838383" : "",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme === "dark" ? "#838383" : "",
      },
    },
    "& .MuiInputBase-input": {
      color: theme === "dark" ? "#838383" : "",
    },
    "& .MuiInputLabel-root": {
      color: theme === "dark" ? "#838383" : "",
    },
  });

  return (
    <section
      className={`pt-[6em] ${
        theme === "dark" ? "bg-dark-gray text-white" : ""
      } pb-[3em]`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="bg-linear-to-br from-purple-pastel via-light-pastel-purple to-light-blue text-center py-18 text-black">
        <h2
          style={{ fontFamily: "var(--font-primary)" }}
          className={`${
            theme === "dark" ? "text-white" : ""
          } font-bold text-4xl`}
        >
          {t("contact_title")}
        </h2>
        <p
          style={{ fontFamily: "var(--font-secondary)" }}
          className={`mt-2 text-[1.1em] ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          {t("contact_subtitle")}
        </p>
      </div>

      <section className="lg:flex lg:justify-center lg:gap-[5em] lg:max-w-7xl lg:m-auto lg:mt-[2em]  ">
        <div
          className={`form-container max-w-[500px] md:w-full m-auto text-center mt-[3em] md:m-auto md:pb-3 md:mt-[2em]
            lg:pl-[2em] px-2 xl:shadow-md xl:w-[45%] xl:m-0 xl:p-8 ${
              isArabic ? "text-right" : "text-left"
            }`}
        >
          <h3
            style={{ fontFamily: "var(--font-primary)" }}
            className={`text-2xl font-bold ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {t("contact_form_title")}
          </h3>
          <p
            className={`p-2 mt-[.5em] text-warm-gray text-left xl:p-0 ${
              isArabic ? "text-right" : "text-left"
            }`}
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            {t("contact_form_desc")}
          </p>

          <div className={isArabic ? "text-right" : "text-left"}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                direction: isArabic ? "rtl" : "ltr",
                marginTop: "2em",
              }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  label={t("contact_firstname_label")}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                  sx={getTextFieldStyle()}
                />
                <TextField
                  label={t("contact_lastname_label")}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                  sx={getTextFieldStyle()}
                />
              </Box>

              <TextField
                label={t("contact_email")}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                sx={getTextFieldStyle()}
              />

              <TextField
                label={t("contact_message")}
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                sx={getTextFieldStyle()}
              />

              <div
                className={`text-sm text-gray-600 space-y-2 mt-4 ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1"
                    style={{
                      marginRight: isArabic ? "0" : "0.5rem",
                      marginLeft: isArabic ? "0.5rem" : "0",
                    }}
                  />
                  <span className={isArabic ? "text-right" : "text-left"}>
                    {t("contact_receive_other_messages")}
                    <span className="text-red-500">*</span>
                  </span>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1"
                    style={{
                      marginRight: isArabic ? "0" : "0.5rem",
                      marginLeft: isArabic ? "0.5rem" : "0",
                    }}
                  />
                  <span className={isArabic ? "text-right" : "text-left"}>
                    {t("contact_consent_storage")}
                    <span className="text-red-500">*</span>
                  </span>
                </label>

                <p className="text-xs mt-3">
                  SpendRight is committed to protecting and respecting your
                  privacy in accordance with our{" "}
                  <a href="#" className="underline text-blue-600">
                    {t("contact_privacy_policy")}
                  </a>
                  .
                </p>
              </div>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: theme === "light" ? "#010c31" : "#4e4e4e",
                  mt: 3,
                  py: 1.5,

                  transition: "background-color 0.3s ease, transform 0.1s ease",

                  "&:hover": {
                    backgroundColor:
                      theme === "light"
                        ? "#7c3aed !important"
                        : "#6c6c6c !important",
                    boxShadow: "none",
                    transform: "scale(1.005)",
                  },
                }}
                className="login-btn"
              >
                {t("contact_send_button")}
              </Button>
            </Box>
          </div>
        </div>

        <section
          className=" mt-[2em] sm:max-w-[500px] m-auto md:w-full
        lg:pl-[1em] xl:flex-col xl:w-[45%] xl:shadow-md xl:p-8 lg:m-0 lg:pr-[2em]"
        >
          <div className="m-auto mt-[3em] px-2 xl:w-full lg:m-0 lg:p-0">
            <img
              src={contactImg}
              alt={t("contact_image_alt")}
              className="w-full rounded-md object-cover h-auto"
            />
          </div>

          <div
            className={` contact-info-wrapper
              text-center lg:text-left mt-[2em] md:m-auto md:pb-3 py-[3em] xl:w-full xl:text-left ${
                isArabic ? "xl:text-right" : "xl:text-left"
              }`}
          >
            <h3
              className={`text-2xl font-bold ${
                isArabic ? "text-right" : "text-left"
              }`}
              style={{ fontFamily: "var(--font-primary)" }}
            >
              {t("contact_info_title")}
            </h3>

            <div
              style={{ fontFamily: "var(--font-secondary)" }}
              className={`flex gap-[1em] items-center m-auto max-w-[300px] my-[1em] py-[1em] lg:max-w-full xl:m-0  ${
                isArabic ? "flex-row" : "flex-row"
              }`}
            >
              <EmailIcon className="text-blue-600" />
              <div className={isArabic ? "text-right grow" : "text-left"}>
                <p className="text-sm text-gray-500">
                  {t("contact_email_label")}
                </p>
                <p className="font-semibold">support@spendright.com</p>
              </div>
            </div>

            <div
              style={{ fontFamily: "var(--font-secondary)" }}
              className={`flex gap-[1em] items-center m-auto max-w-[300px] my-[1em] py-[1em] lg:max-w-full xl:m-0  ${
                isArabic ? "flex-row" : "flex-row"
              }`}
            >
              <PhoneIcon className="text-blue-600" />
              <div className={isArabic ? "text-right grow" : "text-left"}>
                <p className="text-sm text-gray-500">
                  {t("contact_phone_label")}
                </p>
                <p className="font-semibold">+1 (234) 567-890</p>
              </div>
            </div>

            <div
              style={{ fontFamily: "var(--font-secondary)" }}
              className={`flex gap-[1em] items-start m-auto max-w-[300px] my-[1em] py-[1em] lg:max-w-full xl:m-0  ${
                isArabic ? "flex-row" : "flex-row"
              }`}
            >
              <LocationOnIcon className="text-blue-600" />
              <div className={isArabic ? "text-right grow" : "text-left"}>
                <p className="text-sm text-gray-500">
                  {t("contact_business_hours")}
                </p>

                <p className="flex justify-between gap-6 font-semibold">
                  <span>{t("contact_weekdays")} </span>
                  <span>{t("contact_weekdays_hours")}</span>
                </p>

                <p className="flex justify-between font-semibold">
                  <span>{t("contact_saturday")}</span>
                  <span>{t("contact_saturday_hours")}</span>
                </p>

                <p className="flex justify-between font-semibold">
                  <span>{t("contact_sunday")}</span>
                  <span>{t("contact_sunday_hours")}</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Contact;
