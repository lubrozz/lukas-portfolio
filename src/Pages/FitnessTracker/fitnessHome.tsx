import BackToHomeButton from "../../components/BackToHomeButton";
import ExerciseGroup from "../../components/FitnessPage/ExerciseGroup";

import FitnessLayout from "../../Layout/FitnessLayout";

const FitnessHome = () => {
  return (
    <>
      <div>
        <FitnessLayout headerText="Gym Workouts">
          <ExerciseGroup title="Exercise group 1" />
        </FitnessLayout>
      </div>
    </>
  );
};

export default FitnessHome;
