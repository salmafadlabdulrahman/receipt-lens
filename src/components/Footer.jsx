import WalletIcon from "@mui/icons-material/Wallet";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#010c31] flex flex-col justify-center lg:flex-row lg:justify-around py-[2em] px-[3em]">
      <div>
        <div className="logo-container flex items-center gap-2">
          <div className="bg-[#733ce8] text-white rounded-md py-[.3em] text-center w-10">
            <WalletIcon />
          </div>
          <h6 className="font-semibold text-white">{t("logo_title")}</h6>
        </div>

        <div>
          <p className="text-[#ababab] mt-[1em]">{t("footer_subtitle")}</p>
        </div>
      </div>

      <div className="footer-links md:flex md:mt-[2em] md:justify-between lg:justify-between  lg:w-[50%]">
        <div className="mt-[2em] md:m-0">
          <p className="text-white font-semibold">{t("footer_quick_links")}</p>
          <div className="text-[#d0d0d0] mt-3 mb-3 md:m-0">
            <p>{t("footer_quick_links_about")}</p>
            <p>{t("footer_quick_links_features")}</p>
            <p>{t("footer_quick_links_pricing")}</p>
            <p>{t("footer_quick_links_blog")}</p>
          </div>
        </div>

        <div>
          <p className="text-white font-semibold">
            {t("footer_support_links")}
          </p>
          <div className="text-[#d0d0d0] mt-3 mb-3 md:m-0">
            <p>{t("footer_help")}</p>
            <p>{t("footer_contact")}</p>
            <p>{t("footer_privacy")}</p>
            <p>{t("footer_terms_of_service")}</p>
          </div>
        </div>

        <div className="mt-3 mb-3 md:m-0">
          <p className="text-white font-semibold">{t("footer_follow_us")}</p>
          <div className="flex gap-1.5 mt-2">
            <FacebookIcon sx={{ color: "#fff" }} />
            <TwitterIcon sx={{ color: "#fff" }} />
            <LinkedInIcon sx={{ color: "#fff" }} />
            <InstagramIcon sx={{ color: "#fff" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
