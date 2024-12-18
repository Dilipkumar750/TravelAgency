import React from 'react';

const TermsAndConditions = () => {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: '#f0f4f8' 
        }}>
            <div style={{ 
                backgroundColor: 'white', 
                padding: '30px 50px', 
                borderRadius: '12px', 
                maxWidth: '800px', 
                width: '90%', 
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)', 
                lineHeight: '1.6' 
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px' }}>Terms and Conditions</h2>

                {/* Section 1 */}
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>1. Introduction</h3>
                    <p>Welcome to <strong>[Your Travel Agency Name]</strong>. These Terms and Conditions ("Terms") govern your use of our website, services, and booking process. By accessing and using our services, you agree to abide by these Terms and Conditions.</p>
                </div>

                {/* Section 2 */}
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>2. Booking and Payments</h3>

                    <h4 style={{ marginTop: '15px', fontSize: '16px' }}>Booking Confirmation</h4>
                    <p>All bookings are subject to availability. Upon receiving your booking request, we will confirm your reservation and provide you with a booking reference and receipt via email or SMS.</p>

                    <h4 style={{ marginTop: '15px', fontSize: '16px' }}>Payment Terms</h4>
                    <p>Payments can be made through various methods such as:</p>
                    <ul>
                        <li>Credit/Debit cards</li>
                        <li>Bank transfer</li>
                        <li>PayPal</li>
                        <li>Other accepted payment gateways</li>
                    </ul>

                    <h4 style={{ marginTop: '15px', fontSize: '16px' }}>Cancellation Policy</h4>
                    <p>If you cancel your booking, the following cancellation charges may apply:</p>
                    <ul>
                        <li>More than 30 days before departure: Full refund minus any administrative fees.</li>
                        <li>15-30 days before departure: 50% refund of the total cost.</li>
                        <li>Less than 15 days before departure: No refund.</li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>3. Responsibilities</h3>

                    <h4 style={{ fontSize: '16px', marginTop: '10px' }}>Travel Agency Obligations</h4>
                    <p>We act as an intermediary to facilitate travel services. While we strive to provide accurate information about travel destinations and service providers, we do not own or operate airlines, hotels, or transportation services.</p>

                    <h4 style={{ fontSize: '16px', marginTop: '10px' }}>Traveler Responsibilities</h4>
                    <p>It is the responsibility of the traveler to:</p>
                    <ul>
                        <li>Provide accurate information during booking (e.g., names, passport numbers, contact details).</li>
                        <li>Ensure they have valid travel documentation, including passports, visas, and identification.</li>
                        <li>Adhere to local travel laws and customs at all times.</li>
                    </ul>
                </div>

                {/* Section 4 */}
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>4. Services Included</h3>
                    <p>Our travel packages may include:</p>
                    <ul>
                        <li>Accommodation</li>
                        <li>Transportation (flights, buses, trains, taxis)</li>
                        <li>Meals</li>
                        <li>Sightseeing tours</li>
                        <li>Tour guides</li>
                    </ul>
                </div>

                {/* Section 5 */}
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>5. Changes to Itineraries</h3>
                    <p>We reserve the right to modify travel itineraries due to <strong>weather conditions, unforeseen circumstances, or operational constraints</strong>.</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>6. Force Majeure</h3>
                    <p>In cases of <strong>Force Majeure</strong> (natural disasters, war, epidemics, strikes, etc.), we will not be held responsible for any cancellation or delay.</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>7. Contact Information</h3>
                    <p>For any questions regarding these Terms and Conditions, you may contact us at:</p>
                    <p><strong>[Your Travel Agency Name]</strong></p>
                    <p>📧 <a href="mailto:info@youragency.com">info@youragency.com</a></p>
                    <p>📞 [Contact Number]</p>
                    <p>🌐 <a href="https://youragency.com" target="_blank">Website</a></p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
