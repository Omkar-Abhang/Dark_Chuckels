import React from 'react';
import './Policy.css';

const Policy = () => {
  return (
    <div className="center-container">
      <div className="policies">
        <h1> Our Policies</h1>
        <h2>Privacy Policy</h2>
        <p>At HumorLand, we take your privacy seriously. Our website is made for fun purposes only, and we do not collect any personal information from our users. We do not ask you to sign up, register, or log in to our website in order to enjoy our jokes and content.</p>
        <p>We want to make it clear that we do not gather any user data or track your activity on our website. We respect your privacy and are committed to providing a safe and enjoyable experience for all of our visitors.</p>
        <h2>Terms of Service</h2>
        <p>Please note that some of the jokes and content on our website may touch on sensitive topics, including religion. We want to assure you that we do not intend to offend anyone with our content. However, if you find something on our website that is offensive or inappropriate, please let us know so that we can address the issue promptly.</p>
        <h2>Thanking You</h2>
        <p>Thank you for choosing HumorLand as your source for humor and entertainment. We hope you enjoy your time on our website!</p>
        {/* <h2>Refund Policy</h2>
        <p>We do not offer refunds for any products or services purchased through our site. All sales are final.</p> */}
      </div>
    </div>
  );
};

export default Policy;
