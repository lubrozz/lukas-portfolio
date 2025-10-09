interface ExerciseGroupProps {
  title: string;
}

const ExerciseGroup = ({ title }: ExerciseGroupProps) => {
  return (
    <>
      <div className="ExerciseGroup">
        <h1> {title} </h1>
        <div></div>
        <div style={{ textAlign: "center" }}>
          <button className="button-create">
            <span>+ Add</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ExerciseGroup;
