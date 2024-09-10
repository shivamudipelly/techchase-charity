// components/UrgentCauses.js
import React from 'react';
import dis1 from '../images/disaster1.jpg';
import dis2 from '../images/disaster2.jpg';
import dis3 from '../images/disaster3.jpg';

const UrgentCauses = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8">Urgent Causes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CauseCard
          title="Morocco Strikes with Earthquake"
          description="Counter-terrorism has become a major concern as the number of terrorist attacks has increased."
          amount="$4400"
          progress="85%"
          image={dis1}
        />
        <CauseCard
          title="Harmful Disease in Air"
          description="World Health has declared deadly virus as a global health emergency."
          amount="$7888"
          progress="70%"
          image={dis2}
        />
        <CauseCard
          title="Patna Suffers with Heavy Flood"
          description="People in Patna have suffered a very heavy flood and need help."
          amount="$11,000"
          progress="60%"
          image={dis3}
        />
      </div>
    </section>
  );
};

const CauseCard = ({ title, description, amount, progress, image }) => {
  // Convert progress to a number for calculations
  const progressPercent = parseInt(progress, 10);

  // Determine progress bar color
  const progressColor = progressPercent > 80 ? 'bg-green-500' :
                        progressPercent > 60 ? 'bg-yellow-500' :
                        'bg-red-500';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2 text-sm">
            <span className={`text-${progressColor}-500 font-bold`}>{amount}</span>
            <span>{progress} Completed</span>
          </div>
          <div className="relative w-full h-2 bg-gray-200 rounded">
            <div
              className={`absolute top-0 left-0 h-full ${progressColor} rounded`}
              style={{ width: progress }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgentCauses;
