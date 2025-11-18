const NotificationUI = ({ img, company, category, amount }) => {
  return (
    <div className="flex flex-wrap items-center gap-[.8em] mb-[1em]">
      <div className="bg-[#711AFF] px-[.6em] py-[.5em] rounded-[7px]">
        <img src={img} alt="an icon" />
      </div>
      <div className="flex justify-between w-[200px]">
        <div>
          <p className="font-semibold">{company}</p>
          <p>{category}</p>
        </div>
        <span>-${amount}</span>
      </div>
    </div>
  );
};

export default NotificationUI;
