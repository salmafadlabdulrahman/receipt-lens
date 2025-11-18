import Hero from "../components/Hero";
import OrganizeMoney from "../components/OrganizeMoney";
import StayNotified from "../components/StayNotified";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="md:w-[90%] m-auto">
        <OrganizeMoney />
        <StayNotified />
      </section>
    </>
  );
};

export default Home;
