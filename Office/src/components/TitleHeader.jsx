const TitleHeader = ({ title }) => {
  return (
    <div>
      <h1 className="font-medium md:text-5xl text-3xl text-center title-font">
        {title}
      </h1>
    </div>
  );
};

export default TitleHeader;
