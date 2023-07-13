import ContactForm from "../components/ContactForm";

export default function ContactsPage() {
  // Content of the projects page
  return (
    <div className="contact-page-container">
      <div className="contact-info">
        <div className="contact-page-title">CONTACTS</div>
        <div className="contact-details">
          <div className="details-title">
            We'd love to hear from you. Here's how youget in touch with us.
          </div>
          <div className="details-data">
            <div>
              <div className="details-small">
                P: +351 919902960 <br></br>
                E: moura.nunoandre@gmail.com
                <div>_________</div>
                Travessa da Vinha 35 <br></br>
                4560-545 Penafiel<br></br>
                Portugal
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
      <div className="contact-image"></div>
    </div>
  );
}
