import profileImg from "/profile-img.jpg";

const Profile = () => {
  return (
    <section>
      <div className=" mt-[5em]">
        <div className="w-[150px] m-auto">
          <img
            src={profileImg}
            alt="an image of a person"
            className="rounded-full"
          />
        </div>

        <div className="mt-[2em] w-[90%] m-auto md:w-[70%] lg:w-[60%]">
          <h3 className="text-[1.5em] font-semibold">Account</h3>

          <div className="shadow-md px-[1em] mt-[1em] py-[1em]">
            <div className="mb-[1em]">
              <p className="text-gray-600">Name</p>
              <p className="font-semibold">John Doe</p>
            </div>
            <span className="block bg-[#d1d1d1] p-[.2px] my-[1em]  "></span>

            <div className="mb-[1em]">
              <p className="text-gray-600">Email Address</p>
              <p className="font-semibold">johndoe@gmail.com</p>
            </div>
            <span className="block bg-[#d1d1d1] p-[.2px] my-[1em]  "></span>

            <div className="mb-[1em]">
              <p className="text-gray-600">Password</p>
              <p className="font-semibold">*********</p>
            </div>
            <span className="block bg-[#d1d1d1] p-[.2px] my-[1em] "></span>
            <div className="mb-[1em]">
              <p className="text-gray-600">Phone Number</p>
              <p className="font-semibold">+966 123 456 9874 </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
