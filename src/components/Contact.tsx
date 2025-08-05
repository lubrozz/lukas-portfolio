import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <>
      <div className="container-footer">
        <SocialIcon
          style={{ height: 40, width: 40, padding: "0.25rem" }}
          network="email"
        />
        <p style={{ padding: "0.25rem" }}>Lukasglo12@gmail.com</p>
      </div>
    </>
  );
};

export default Contact;
