const TitleHeader = ({ title, label }) => {
  return (
    <div>
      <h2 className="font-medium md:text-5xl text-3xl text-center title-font">
        <span className="sr-only">{label}</span>
        <span aria-hidden="true">{title}</span>
      </h2>
    </div>
  );
};

export default TitleHeader;
