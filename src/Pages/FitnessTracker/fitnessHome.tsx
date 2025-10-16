import { Key } from "react";
import BackToHomeButton from "../../components/BackToHomeButton";
import ExerciseGroup from "../../components/FitnessPage/ExerciseGroup";
import { API_BASE_URL } from "../../config";

import FitnessLayout from "../../Layout/FitnessLayout";

const allExerciseGroups = await fetch(`${API_BASE_URL}/api/groups`).then(
  (res) => res.json()
);

const FitnessHome = () => {
  return (
    <>
      <div>
        <FitnessLayout headerText="Gym Workouts">
          <div>
            {allExerciseGroups.map((group: { id: Key; name: string }) => (
              <div key={group.id}>
                <ExerciseGroup title={group.name} />
              </div>
            ))}
          </div>
        </FitnessLayout>
      </div>
    </>
  );
};

export default FitnessHome;
