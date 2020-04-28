import React from 'react';

const GreetingHeader = () => {
  const currentHourOfDay = new Date().getHours();

  // Custom greeting for the visitor based on time of day
  const GetGreeting = () => {
    if (currentHourOfDay <= 2) {
      return 'Good (super early) morning! 🌅 ';
    } else if (currentHourOfDay >= 3 && currentHourOfDay <= 11) {
      return 'Good morning! 🌅';
    } else if (currentHourOfDay >= 12 && currentHourOfDay <= 17) {
      return 'Good afternoon! ☀️ ';
    } else {
      return 'Good evening! 🌇 ';
    }
  };

  return (
    <p className="has-text-weight-bold is-size-3">
      <strong>{GetGreeting()}</strong>
    </p>
  );
};

export default GreetingHeader;