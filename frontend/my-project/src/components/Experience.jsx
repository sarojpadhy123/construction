import React, { useState, useEffect } from 'react';

const Experience = () => {
    const [projectsCount, setProjectsCount] = useState(0);
    const [yearsOfExperienceCount, setYearsOfExperienceCount] = useState(0);
    const [districtsCoveredCount, setDistrictsCoveredCount] = useState(0);
    const [companiesWorkedWithCount, setCompaniesWorkedWithCount] = useState(0);

    const animateCounts = () => {
        const projectsLimit = 120;
        const yearsOfExperienceLimit = 10;
        const districtsCoveredLimit = 15;
        const companiesWorkedWithLimit = 15;

        let projectsInterval, yearsInterval, districtsInterval, companiesInterval;

        projectsInterval = setInterval(() => {
            setProjectsCount((prevCount) => {
                if (prevCount >= projectsLimit) {
                    clearInterval(projectsInterval);
                    return projectsLimit;
                } else {
                    return prevCount + 1;
                }
            });
        }, 50);

        yearsInterval = setInterval(() => {
            setYearsOfExperienceCount((prevCount) => {
                if (prevCount >= yearsOfExperienceLimit) {
                    clearInterval(yearsInterval);
                    return yearsOfExperienceLimit;
                } else {
                    return prevCount + 1;
                }
            });
        }, 100);

        districtsInterval = setInterval(() => {
            setDistrictsCoveredCount((prevCount) => {
                if (prevCount >= districtsCoveredLimit) {
                    clearInterval(districtsInterval);
                    return districtsCoveredLimit;
                } else {
                    return prevCount + 1;
                }
            });
        }, 75);

        companiesInterval = setInterval(() => {
            setCompaniesWorkedWithCount((prevCount) => {
                if (prevCount >= companiesWorkedWithLimit) {
                    clearInterval(companiesInterval);
                    return companiesWorkedWithLimit;
                } else {
                    return prevCount + 1;
                }
            });
        }, 90);

        return () => {
            clearInterval(projectsInterval);
            clearInterval(yearsInterval);
            clearInterval(districtsInterval);
            clearInterval(companiesInterval);
        };
    };

    useEffect(() => {
        animateCounts();
    }, []);

    return (
        <div className="bg-gray-300 py-12 mb-8 section-container">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">Our Experience</h2>
                <div className="flex flex-wrap justify-center items-center gap-12">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold mb-2">{projectsCount}<span className='text-blue-700 font-bold'>+</span></h3>
                        <p>Projects Done</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl font-bold mb-2">{yearsOfExperienceCount}<span className='text-blue-700 font-bold'>+</span></h3>
                        <p>Years of Experience</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl font-bold mb-2">{districtsCoveredCount}<span className='text-blue-700 font-bold'>+</span></h3>
                        <p>Districts Covered</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl font-bold mb-2">{companiesWorkedWithCount}<span className='text-blue-700 font-bold'>+</span></h3>
                        <p>Companies Worked With</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
