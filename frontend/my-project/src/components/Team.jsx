import React from 'react'
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Team = () => {
    const teamMembers = [
        {
            image: './teamsurya.jpg',
            name: 'Mr. Surya Mallick',
            role: 'Account Manager',
            socialMedia: {
                facebook: 'facebook-link',
                instagram: 'instagram-link',
                youtube: 'youtube-link',
                twitter: 'twitter-link',
            },
        },
        {
            image: './teamsoumya.jpg',
            name: 'Mr. Soumya Mishra',
            role: 'Sr. Project Coordinator',
            socialMedia: {
                facebook: 'facebook-link',
                instagram: 'instagram-link',
                youtube: 'youtube-link',
                twitter: 'twitter-link',
            },
        },
        {
            image: './teamlalit.jpg',
            name: 'Mr. Lalit Mishra',
            role: 'SR.EXECUTIVE',
            socialMedia: {
                facebook: 'facebook-link',
                instagram: 'instagram-link',
                youtube: 'youtube-link',
                twitter: 'twitter-link',
            },
        },
        {
            image: './teamdeepak.jpg',
            name: 'Mr. D Sahoo',
            role: 'TECHNICAL HEAD',
            socialMedia: {
                facebook: 'facebook-link',
                instagram: 'instagram-link',
                youtube: 'youtube-link',
                twitter: 'twitter-link',
            },
        },
        // Add more team members if needed
    ];
    const platformColors = {
        facebook: '#3b5998', // Facebook color
        instagram: '#C13584', // Instagram color
        youtube: '#FF0000', // YouTube color
        twitter: '#1DA1F2', // Twitter color
    };

    return (
        <div className="bg-gradient-to-r from-[#FAFAFA] from-0% to-[#9dbbe6] to-100% mt-0 mb-2 pt-2 pb-2 section-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        className="bg-blue-300 shadow-md rounded-lg overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="object-cover object-center w-full h-48 md:h-64 lg:h-64 sm:h-full"
                            style={{ objectPosition: 'center top' }} 
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                            <p className="text-gray-600 mb-4">{member.role}</p>
                            <div className="flex justify-center space-x-4">
                                {Object.entries(member.socialMedia).map(([platform, link]) => {
                                    const platformIcons = {
                                        facebook: FaFacebook,
                                        instagram: FaInstagram,
                                        youtube: FaYoutube,
                                        twitter: FaTwitter,
                                    };

                                    const Icon = platformIcons[platform];
                                    const platformColor = platformColors[platform];

                                    return (
                                        <a
                                            key={platform}
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: platformColor }}
                                        >
                                            <Icon size={30} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Team;
