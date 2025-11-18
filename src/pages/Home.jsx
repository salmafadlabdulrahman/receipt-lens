import Hero from "../components/Hero";
import OrganizeMoney from "../components/OrganizeMoney";
import StayNotified from "../components/StayNotified";
import { useAppContext } from "../contexts/useAppContext";

const Home = () => {
  const {theme} = useAppContext();
  return (
    <section className={`${theme === "light" ? "bg-white" : "bg-[#111217]" }`}>
      <Hero />
      <section className="md:w-[90%] m-auto">
        <OrganizeMoney />
        <StayNotified />
      </section>
    </section>
  );
};

export default Home;
