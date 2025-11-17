import Hero from "../components/Hero";
import OrganizeMoney from "../components/OrganizeMoney";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="md:w-[90%] m-auto">
        <OrganizeMoney />
      </section>
    </>
  );
};

export default Home;