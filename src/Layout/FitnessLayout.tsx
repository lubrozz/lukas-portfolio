import BackToHomeButton from "../components/BackToHomeButton";
import OnePageBackButton from "../components/OnePageBackButton";

const FitnessLayout = () => {
  return (
    <>
      <OnePageBackButton />
      <br />
      <div className="container">
        <div className="FitnessHeader">
          <h1>Gym Workouts</h1>
        </div>
      </div>
      <div className="container"></div>
    </>
  );
};

export default FitnessLayout;
