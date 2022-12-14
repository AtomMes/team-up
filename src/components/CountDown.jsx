import React from 'react';

const CountDown = () => {
  const [width, setWidth] = React.useState(400);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWidth(width + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [width]);
  return (
    <div className="container">
      <p className="daysLeft">5 Days left...</p>

      <div className="countdown">
        <div className="loading" style={{ width: `${String(width + 'px')}` }}></div>
      </div>
      <p className="comingSoon">Coming Soon</p>
    </div>
  );
};

export default CountDown;
