const CompanyStats = () => {
  const stats = [
    { value: "200+", label: "Doctors Already Joined" },
    { value: "95%", label: "Doctor Satisfaction" },
    { value: "₹2.5L", label: "Projected Monthly Earnings" },
    { value: "2 Months", label: "Until Launch" },
  ];

  return (
    <div className=" statscard
    ">
      {stats.map((item, index) => (
        <div key={index}>
          <div className="textstats">
            {item.value}
          </div>
          <div className="labelstats">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyStats;
