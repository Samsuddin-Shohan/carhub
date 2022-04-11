import React from 'react';
import Navigation from '../Home/Shared/Navigation/Navigation';
import Footer from '../Home/Shared/Footer/Footer';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <>
            <Navigation />
            <div className='avoid-margin'>
                <h1>Your Trusted Car Rental Site: car<span className='text-primary'>Hub</span></h1>
                <p>carHub is a renowned and Trusted Car Rental site with successfully over 2 years running. Now it's time to introduce our website carHub. Now you can know update about our upcoming all car from our website & also rent car for you. For renting car in our website at first you need to logging with a gmail account or create an account with User name, email and password. Then just hit Rent Now button and provide Date, Address & Mobile number then Confirm booking by hitting 4-5 times. You can also manage your order from Dashboard and give us review. You can also see the review in the home page.</p>

                    <h2>If you have any query then contact us on: 01786747636(Hotline)</h2>
                    
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;