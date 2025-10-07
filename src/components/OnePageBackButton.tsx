import { Link, useNavigate } from "react-router-dom";

const OnePageBackButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="arrowed">
        <button className="arrow-1" onClick={() => navigate(-1)}></button>
      </div>
    </>
  );
};

export default OnePageBackButton;
