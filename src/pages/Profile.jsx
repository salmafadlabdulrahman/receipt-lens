import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/useAppContext";

const Profile = () => {
  const { t } = useTranslation();
  const { theme } = useAppContext();

  return (
    <section>
      <div
        className={`pt-[5em] ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        <div
          className={`w-30 h-30 rounded-full m-auto flex items-center justify-center text-white text-[3em] font-medium ${
            theme === "dark" ? "bg-purple-mid" : "bg-dark-navy"
          }`}
        >
          J
        </div>

        <div className="mt-[2em] w-[90%] m-auto md:w-[70%] lg:w-[60%]">
          <h3 className="text-[1.5em] font-semibold">{t("account")}</h3>

          <div className="shadow-md px-[1em] mt-[1em] py-[1em]">
            <div className="mb-[1em]">
              <p
                className={` ${
                  theme === "dark" ? "text-pastel-gray" : "text-gray-600"
                }`}
              >
                {t("name")}
              </p>
              <p className="font-semibold">John Doe</p>
            </div>
            <span className="block bg-light-gray p-[.2px] my-[1em]"></span>

            <div className="mb-[1em]">
              <p
                className={` ${
                  theme === "dark" ? "text-pastel-gray" : "text-gray-600"
                }`}
              >
                {t("contact_email")}
              </p>
              <p className="font-semibold">johndoe@gmail.com</p>
            </div>
            <span className="block bg-light-gray p-[.2px] my-[1em]  "></span>

            <div className="mb-[1em]">
              <p
                className={` ${
                  theme === "dark" ? "text-pastel-gray" : "text-gray-600"
                }`}
              >
                {t("password")}
              </p>
              <p className="font-semibold">*********</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
