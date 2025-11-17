import appleIcon from "/apple-icon.png";
import amazonIcon from "/amazon-icon.png";
import googleIcon from "/google-icon.png";
import NotificationUI from "./NotificationUI";

const StayNotified = () => {
  return (
    <section className="mt-[6em] mb-[8em] px-[2em] md:px-0 md:flex md:gap-[3em] md:items-center md:justify-center">
      <div>
        <span className="font-medium">Notifications</span>
        <h3 className="text-[2.5em] font-semibold">Stay Notified</h3>
        <p className="max-w-[450px]">
          Stay on top of your spending with smart, timely reminders.
        </p>
      </div>

      <div className="notifications-container mt-[2em] flex flex-wrap gap-[2em] md:block">
        <NotificationUI
          img={appleIcon}
          company={"Apple"}
          category={"Electronics"}
          amount={500}
        />
        <NotificationUI
          img={amazonIcon}
          company={"Amazon"}
          category={"Shopping"}
          amount={150}
        />
        <NotificationUI
          img={googleIcon}
          company={"Google"}
          category={"Ads"}
          amount={70}
        />
      </div>
    </section>
  );
};

export default StayNotified;
