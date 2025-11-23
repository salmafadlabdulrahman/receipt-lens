import Hero from "../components/Hero";
import MillionReceipts from "../components/MillionReceipts";
import OrganizeMoney from "../components/OrganizeMoney";
import StayNotified from "../components/StayNotified";
import FAQ from "../components/FAQ";
import { useAppContext } from "../contexts/useAppContext";

const Home = () => {
  const { theme } = useAppContext();
  return (
    <section className={`${theme === "light" ? "bg-white" : "bg-dark-gray"}`}>
      <Hero />

      <section className="md:w-[90%] m-auto">
        <MillionReceipts />
        <OrganizeMoney />
        <StayNotified />
        <FAQ />
      </section>
    </section>
  );
};

export default Home;
