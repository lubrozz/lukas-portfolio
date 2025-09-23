import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <>
      <div className="container-footer">
        <SocialIcon
          style={{
            height: 40,
            width: 40,
            padding: "0.25rem",
          }}
          network="email"
        />
        <div style={{ height: 40, padding: "0.50rem" }}>
          <p>Lukasglo12@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
