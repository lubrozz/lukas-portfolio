import { Link } from "react-router-dom";
import RejsekortFooter from "../components/RejsekortFooter";
import RejsekortHeader from "../components/RejsekortHeader";
import RejsekortScanButton from "../components/RejsekortScanButton";

const RejsekortLayout = () => {
  return (
    <>
      <div>
        <Link className="button-81" to={"/"}>
          Back to home
        </Link>

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
