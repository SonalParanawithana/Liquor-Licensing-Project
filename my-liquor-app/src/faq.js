import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'How do I apply for a liquor license?',
            answer: 'To apply for a liquor license, click on the "Apply here" button on the home page and fill out the application form.'
        },
        {
            question: 'What documents are required for the application?',
            answer: 'You will need to provide proof of identity, business registration documents, and a detailed business plan.'
        },
        {
            
            question: 'How long does it take to process the application?',
            answer: 'The processing time for a liquor license application is approximately 4-6 weeks.'
        },
        {
            question: 'Can I track the status of my application?',
            answer: 'Yes, you can track the status of your application by logging into your account and navigating to the "My Applications" section.'
        },
        {
            question: 'Who can I contact for further assistance?',
            answer: 'For further assistance, you can contact our support team at support@excisedepartment.lk or call us at +94 11 204 5000. You can add any complaints or suggestions to 1913.'
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions (FAQ)</h1>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => handleToggle(index)}>
                            {faq.question}
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
