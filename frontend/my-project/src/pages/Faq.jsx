import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
        question: 'What services do you offer?',
        answer: 'We provide a range of construction services including residential, commercial, and industrial building construction, renovations, and architectural designs.',
      },
      {
        question: 'Where are you located in Bhubaneswar?',
        answer: 'Our office is situated at Plot no - 1984/3400/684 2nd Floor, Kesura -751002 Puri-bypass , Bhubaneswar, and we operate across the city and its surrounding areas.',
      },
      {
        question: 'How can I request a quote or estimate?',
        answer: 'You can request a quote by filling out the form on our website or by contacting our office directly via phone or email. Our team will assist you promptly.',
      },
      {
        question: 'Are you licensed and insured?',
        answer: 'Yes, we are a licensed construction company and carry comprehensive insurance to ensure the safety and security of our projects and clients.',
      },
      {
        question: 'What makes your construction company the best in Bhubaneswar?',
        answer: 'We pride ourselves on our commitment to quality, adherence to timelines, innovative designs, skilled workforce, and customer satisfaction. Our years of experience and successful projects attest to our reputation as the best construction company in Bhubaneswar.',
      },
      {
        question: 'Do you provide a guarantee on your construction work?',
        answer: 'Yes, we offer a guarantee on our construction projects to ensure the quality of workmanship and materials used. We prioritize client satisfaction and stand by the excellence of our construction.',
      },
      {
        question: 'Can I view your portfolio of completed projects?',
        answer: 'Absolutely! You can find our portfolio showcasing our completed projects on our website or by requesting it directly from our team. We take pride in our past work and are eager to showcase our capabilities.',
      },
      {
        question: 'How do you ensure transparency and communication during a project?',
        answer: 'We maintain clear and open communication channels throughout the project. Our team keeps clients informed about progress, updates, and any potential changes. We prioritize transparency in all our dealings.',
      },
      {
        question: 'What services do you offer as a civil contractor?',
        answer: 'As a civil contractor, we offer a wide range of construction services including building construction, home renovation, civil renovation, and more. Our expertise covers various aspects of civil work to meet diverse project needs.',
      },
      {
        question: 'How do I choose the right construction contractor for my project?',
        answer: 'Selecting the ideal construction contractor involves considering factors like experience, past projects, expertise in home construction, building construction, and civil renovations, client testimonials, and adherence to timelines and budget constraints.',
      },
      {
        question: 'What sets your building construction services apart?',
        answer: 'Our building construction services focus on quality, innovation, adherence to timelines, and client satisfaction. We provide customized solutions and employ skilled professionals to ensure excellence in every project we undertake.',
      },
      {
        question: 'Do you specialize in home renovation services?',
        answer: 'Yes, our expertise extends to home renovation. Whether it’s a small remodeling project or a comprehensive renovation, we offer tailored solutions to transform your home, ensuring a seamless and satisfying renovation experience.',
      },
    // Add more FAQ items as needed
  ];

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6"> Questions Asked By Our Customers</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full flex justify-between items-center py-2 px-4 bg-blue-950 rounded-md focus:outline-none focus:bg-blue-900 text-white"
            onClick={() => toggleFaq(index)}
          >
            <span className="font-semibold">{faq.question}</span>
            <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="mt-2 px-4 py-2 bg-gray-100 rounded-md">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
