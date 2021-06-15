import React from 'react';
import AppBar from '../Components/GeneralAppBar';
import Footer from '../Components/Footer';

function PrivacyPolicy(props) {
    const styles = {
        view: {
            padding: "20px",
            marginTop: 60
        },
        mainHeading: {
            fontSize: 25,
            fontWeight: "bold"
        },
        date: {
            color: "grey",
            marginTop: 5,
            marginBottom: 15
        },
        contents: {
            fontSize: 20,
            fontWeight: "bold"
        },
        heading: {
            fontSize: 18,
            fontWeight: "bold"
        }
    }
    return (
        <div>
            <AppBar {...props} />
            <div style={styles.view}>
                <div style={styles.mainHeading}>
                    PRIVACY NOTICE
                </div>
                <div style={styles.date}>
                    Last updated 25.08.20
                </div>
                <p>
                    Thank you for choosing to be part of our community (“company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at
                    {" "}<a href="mailto:enquiries@business2businesslimited.com">enquiries@business2businesslimited.com</a>.
                </p>
                <p>
                    When you visit our and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our and our services.
                </p>
                <p>
                    This privacy policy applies to all information collected through our and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the <strong>"Sites"</strong>).
                </p>
                <p>
                    <strong>
                        Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.
                     </strong>
                </p>

                <div style={styles.contents}>TABLE OF CONTENTS</div>
                <ol>
                    <li>WHAT INFORMATION DO WE COLLECT?</li>
                    <li>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>
                    <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
                    <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
                    <li>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>
                    <li>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</li>
                    <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                    <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                    <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
                    <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                    <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                    <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
                    <li>DO WE MAKE UPDATES TO THIS POLICY?</li>
                    <li>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</li>
                </ol>

                <div style={styles.heading}>
                    1. WHAT INFORMATION DO WE COLLECT?
                </div><br />
                <b>
                    Personal information you disclose to us<br />
                </b>
                <i>
                    In Short: We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information.
                </i>
                <p>
                    We collect personal information that you voluntarily provide to us when registering at the  expressing an interest in obtaining information about us or our products and services, when participating in activities on the (such as posting messages in our online forums or entering competitions, contests or giveaways) or otherwise contacting us.
                </p>
                <p>
                    The persoanl information that we collect depends on the context of your interactions with us and the , the choices you make and the products and features you use. The personal information we collect can include the following:
                </p>
                <p>
                    <b>Name and Contact Data.</b> We collect your first and last name, email address, postal address, phone number, and other similar contact data.
                </p>
                <p>
                    <b>Credentials.</b> We collect passwords, password hints, and similar security information used for authentication and account access.
                </p>
                <p>
                    <b>Payment Data.</b>We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor and you should review its privacy policies and contact the payment processor directly to respond to your questions.
                </p>
                <p>
                    <b>Social Media Login Data.</b>We provide you with the option to register using social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the Information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS" below.
                </p>
                <p>
                    All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
                </p>
                <b>
                    Information automatically collected
                </b><br />
                <i>
                    In Short: Some information – such as IP address and/or browser and device characteristics – is collected automatically when you visit our .
                </i><br />
                <p>
                    We automatically collect certain information when you visit, use or navigate the . This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our and other technical information. This information is primarily needed to maintain the security and operation of our , and for our internal analytics and reporting purposes.
                </p>
                <p>
                    Like many businesses, we also collect information through cookies and similar technologies.
                </p><br />
                <b>
                    Information collected from other sources
                </b><br />
                <i>
                    In Short: We may collect limited data from public databases, marketing partners, and other outside sources.
                </i><br />
                <p>
                    We may obtain information about you from other sources, such as public databases, joint marketing partners, as well as from other third parties. Examples of the information we receive from other sources include: social media profile information; marketing leads and search results and links, including paid listings (such as sponsored links).
                </p>

                <div style={styles.heading}>
                    2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                </div><br />
                <i>
                    In Short: We only share information with your consent, to comply with laws, to protect your rights, or to fulfill business obligations.
                </i>
                <p>
                    We may process or share data based on the following legal basis:
                </p>
                <ul>
                    <li><b>Consent:</b> We may process your data if you have given us specific consent to use your personal information in a specific purpose</li>
                    <li><b>Legitimate Interests:</b> We may process your data when it is reasonably necessary to achieve our legitimate business interests</li>
                    <li><b>Performance of a Contract:</b> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract</li>
                    <li><b>Legal Obligations:</b> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
                    <li><b>Vital Interests:</b></li>We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.
                </ul>
                <p>
                    More specifically, we may need to process your data or share your personal information in the following situations:
                </p>
                <ul>

                </ul>
                <li><b>Vendors, Consultants and Other Third-Party Service Providers.</b> We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the , which will enable them to collect data about how you interact with the over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity. Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.</li>
                <li><b>Business Transfers.</b> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li><b>Third-Party Advertisers.</b> We may use third-party advertising companies to serve ads when you visit the . These companies may use information about your visits to our Website(s) and other websites that are contained in web cookies and other tracking technologies in order to provide advertisements about goods and services of interest to you.</li>
                <li><b>Affiliates.</b> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.</li>
                <li><b>Business Partners.</b> We may share your information with our business partners to offer you certain products, services or promotions.</li>
                <li><b>Other Users.</b> When you share personal information or otherwise interact with public areas of the , such personal information may be viewed by all users and may be publicly distributed outside the in perpetuity. If you interact with other users of our and register through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our , and view your profile</li>

                <div style={styles.heading}>
                    3. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </div>
                <br />
                <i>
                    In Short: We may use cookies and other tracking technologies to collect and store your information.
                </i>
                <p>
                    We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
                </p>

                <div style={styles.heading}>
                    4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </div><br />
                <i>
                    In Short: If you choose to register or log in to our websites using a social media account, we may have access to certain information about you.
                </i>
                <p>
                    Our offer you the ability to register and login using your third party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile Information we receive may vary depending on the social media provider concerned, but will often include your name, e-mail address, friends list, profile picture as well as other information you choose to make public.
                </p>
                <p>
                    We will use the information we receive only for the purposes that are described in this privacy policy or that are otherwise made clear to you on the . Please note that we do not control, and are not responsible for, other uses of your personal information by your third party social media provider. We recommend that you review their privacy policy to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.
                </p>

                <div style={styles.heading}>
                    5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                </div><br />
                <i>
                    In Short: We may transfer, store, and process your information in countries other than your own.
                </i>
                <p>
                    Our servers are located in. If you are accessing our from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "WILL YOUR INFORMATION BE SHARED WITH ANYONE?" above), in and other countries.
                </p>
                <p>
                    If you are a resident in the European Economic Area, then these countries may not have data protection or other laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy policy and applicable law.
                </p>
                <p>
                    Binding Corporate Rules:
                </p>
                These include, a set of Binding Corporate Rules ("BCRs") established and implemented by CityDiaries. Our BCRs have been recognized by EEA data protection authorities as providing an adequate level of protection to the personal information we process internationally.

                <div style={styles.heading}>
                    6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                </div><br />
                <i>
                    In Short: We are not responsible for the safety of any information that you share with third-party providers who advertise, but are not affiliated with, our websites.
                </i>
                <p>
                    The may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy policy. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services or applications that may be linked to or from the . You should review the policies of such third parties and contact them directly to respond to your questions.
                </p>

                <div style={styles.heading}>
                    7. HOW LONG DO WE KEEP YOUR INFORMATION?
                </div><br />
                <i>
                    In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.
                </i>
                <p>
                    We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
                </p>
                <p>
                    When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                </p><br />
                <div style={styles.heading}>
                    8. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </div><br />
                <i>
                    In Short: We aim to protect your personal information through a system of organisational and technical security measures.
                </i>
                <p>
                    We have implemented appropriate technical and organisational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our is at your own risk. You should only access the services within a secure environment.
                </p>

                <div style={styles.heading}>
                    9. DO WE COLLECT INFORMATION FROM MINORS?
                </div><br />
                <i>
                    In Short: We do not knowingly collect data from or market to children under 18 years of age.
                </i>
                <p>
                    We do not knowingly solicit data from or market to children under 18 years of age. By using the , you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the . If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at enquiries@business2businesslimited.com
                </p>

                <div style={styles.heading}>
                    10. WHAT ARE YOUR PRIVACY RIGHTS?
                </div><br />
                <i>
                    In Short: In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
                </i>
                <p>
                    In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.
                </p>
                <p>
                    If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal.
                </p>
                <p>
                    If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                </p><br />
                <b>
                    Account Information
                </b><br />
                <p>
                    If you would at any time like to review or change the information in your account or terminate your account, you can:
                </p>
                <p>
                    Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.
                </p>
                <p>
                    Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we will still need to send you service-related emails that are necessary for the administration and use of your account. To otherwise opt-out, you may:
                </p><br />
                <div style={styles.heading}>
                    11. CONTROLS FOR DO-NOT-TRACK FEATURES
                </div><br />
                <p>
                    Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.
                </p><br />

                <div style={styles.heading}>
                    12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </div><br />
                <i>
                    In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
                </i>
                <p>
                    California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                </p>
                <p>
                    If you are under 18 years of age, reside in California, and have a registered account with the , you have the right to request removal of unwanted data that you publicly post on the . To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the , but please be aware that the data may not be completely or comprehensively removed from our systems.
                </p>

                <div style={styles.heading}>
                    13. DO WE MAKE UPDATES TO THIS POLICY?
                </div><br />
                <i>
                    In Short: Yes, we will update this policy as necessary to stay compliant with relevant laws.
                </i>
                <p>
                    We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
                </p><br />

                <div style={styles.heading}>
                    14. HOW CAN YOU CONTACT US ABOUT THIS POLICY?
                </div>
                <p>
                    If you have questions or comments about this policy, you may email us at
                    {" "}<a href="mailto:enquiries@business2businesslimited.com">enquiries@business2businesslimited.com</a>
                </p><br />
                <div style={styles.heading}>
                    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                </div><br />
                <p>
                    Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking here. We will respond to your request within 30 days.
                </p>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default PrivacyPolicy;