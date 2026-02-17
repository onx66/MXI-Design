import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ContactPage.css";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simüle edilmiş form gönderimi
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
            
            // 3 saniye sonra mesajı temizle
            setTimeout(() => setSubmitStatus(null), 3000);
        }, 1500);
    };

    return (
        <div className="contact-page">
            <Header />
            <main className="contact-main">
                <div className="contact-container">
                    <div className="contact-header">
                        <h1 className="contact-title">Contact</h1>
                        <div className="contact-title-line"></div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit} data-testid="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="Name..."
                                value={formData.name}
                                onChange={handleChange}
                                required
                                data-testid="contact-name-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="Email..."
                                value={formData.email}
                                onChange={handleChange}
                                required
                                data-testid="contact-email-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Message..."
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                data-testid="contact-message-input"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                            data-testid="contact-submit-btn"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 2L11 13"/>
                                        <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                                    </svg>
                                </>
                            )}
                        </button>

                        {submitStatus === "success" && (
                            <div className="success-message" data-testid="contact-success-message">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 6L9 17l-5-5"/>
                                </svg>
                                <span>Your message has been sent successfully!</span>
                            </div>
                        )}
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ContactPage;
