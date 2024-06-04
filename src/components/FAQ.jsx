import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Minitgo?",
            answer: "Minitgo is a versatile platform offering a variety of products and services tailored to your needs, providing an exceptional shopping experience."
        },
        {
            question: "How can I track my order?",
            answer: "You can track your order by logging into your Minitgo account and visiting the 'Track My Order' section."
        },
        {
            question: "What payment methods are accepted?",
            answer: "Minitgo accepts various payment methods including credit/debit cards, net banking, UPI, and popular digital wallets."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach out to our customer support via the 'Contact Us' page or by emailing support@minitgo.com."
        },
        {
            question: "What is the return policy?",
            answer: "Minitgo offers a 30-day return policy for most products. Visit our 'Return Policy' page for more details."
        },
        {
            question: "Are there any ongoing promotions?",
            answer: "Yes, Minitgo frequently offers promotions and discounts. Check out our 'Deals' page for the latest offers."
        },
        {
            question: "How do I update my account information?",
            answer: "Log into your Minitgo account and navigate to 'Account Settings' to update your personal information."
        },
        {
            question: "Is my personal information secure?",
            answer: "Absolutely. Minitgo uses advanced security measures to ensure your personal information is kept safe and confidential."
        }
    ];

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-10">
                            <h3
                                className="flex items-center justify-around mb-4 text-lg font-medium text-gray-900 cursor-pointer dark:text-white"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className="ml-2">{openIndex === index ? '-' : '+'}</span>
                            </h3>
                            {openIndex === index && (
                                <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
