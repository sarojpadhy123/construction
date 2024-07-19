import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleRealEstate = () => {
    const { imageurl, imagedesc, imagerating } = useLoaderData();

    return (
        <div className="bg-gradient-to-r from-[#FAFAFA] from-0% to-[#9dbbe6] to-100% py-12 .section-container mt-16 p-12">
            <div className="bg-gray-700 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-2xl w-full mx-4 md:mx-auto">
                    <img src={imageurl} alt={imagedesc} className="w-full h-80 object-cover object-center" />
                    <div className="p-6">
                        <h1 className="text-sm font-semibold mb-4 ">{imagedesc}</h1>
                        <div className="flex items-center">
                            <span className="text-yellow-500 text-lg mr-2">Rating: {imagerating}</span>
                            {/* You can add additional UI elements here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleRealEstate;
