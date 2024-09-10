// components/Main.js
import React from 'react';
import UrgentCauses from './UrgentCauses';
import MakingDifference from './MakingDifference';
import logo from '../images/child.jpg';



const Main = () => {
    return (
        <main className="container  mx-auto px-4 py-8">
            <section className="mb-12 flex flex-col md:flex-row items-center text-center md:text-left">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">Empower Hope, Transform Lives</h1>
                    <p className="text-gray-600 mb-8">
                        The essence of charity by conveying the idea of uplifting individuals and communities
                        through the power of hope and positive change.
                    </p>
                </div>
                <img
                    src={logo}
                    alt="Group of happy children"
                    className="mx-auto md:mx-0 rounded-lg shadow-lg"
                    width="600"
                    height="400"
                />
            </section>


            <section className="bg-green-500 text-white py-8 rounded-lg mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <StatCard icon="fa-project-diagram" value="563" label="Project Completed" />
                    <StatCard icon="fa-handshake" value="425" label="Trusted Partner" />
                    <StatCard icon="fa-dollar-sign" value="978" label="Money Donated" />
                    <StatCard icon="fa-users" value="32" label="Active Volunteer" />
                </div>
            </section>

            <UrgentCauses />
            <MakingDifference />
        </main>
    );
};

const StatCard = ({ icon, value, label }) => (
    <div>
        <i className={`fas ${icon} text-3xl mb-2`}></i>
        <h2 className="text-2xl font-bold">{value}</h2>
        <p>{label}</p>
    </div>
);

export default Main;
