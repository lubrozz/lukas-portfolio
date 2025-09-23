import { Link } from "react-router-dom";
import RejsekortFooter from "../components/Rejsekort/RejsekortFooter";
import RejsekortHeader from "../components/Rejsekort/RejsekortHeader";
import RejsekortScanButton from "../components/Rejsekort/RejsekortScanButton";
import BackToHomeButton from "../components/BackToHomeButton";

const RejsekortLayout = () => {
  return (
    <>
      <div>
        <BackToHomeButton />

        <RejsekortHeader />
        <main>
          <RejsekortScanButton />
        </main>
        <RejsekortFooter />
      </div>
    </>
  );
};

export default RejsekortLayout;
