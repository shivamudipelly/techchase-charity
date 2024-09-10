// components/MakingDifference.js
import React from 'react';

const MakingDifference = () => {
    return (
        <section className="bg-gray-100 py-12 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">
                Making a Difference for those <br /> who face hardship
            </h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                    <DifferenceCard
                        title="Donate Money"
                        icon="fas fa-dollar-sign"
                    />
                    <DifferenceCard
                        title="Donate Clothes"
                        icon="fas fa-tshirt"
                    />
                    <DifferenceCard
                        title="Donate Food"
                        icon="fas fa-utensils"
                    />
                </div>
            </div>
        </section>
    );
};

const DifferenceCard = ({ title, icon }) => (
    <div className="bg-skin-tone rounded-lg shadow-lg overflow-hidden p-4 max-w-xs mx-auto">
        <div className="flex justify-center mt-4">
            <i className={`${icon} text-green-500 text-4xl`}></i>
        </div>
        <div className="text-center mt-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">
                Your small help can change someone else's life and make them happy. You will have a good deed added to your cart.
            </p>
            <button className="mt-4 bg-yellow-200 text-white-500 px-4 py-2 rounded-lg hover:bg-yellow-400">
                Donate Now
            </button>
        </div>
    </div>
);

export default MakingDifference;
