import { useState } from "react";
import { X } from "lucide-react";

const RejsekortScanButton = () => {
  const [travelCheck, setTravelCheck] = useState<boolean | null>(null); //ensure only boolean or null
  function determineTravel() {
    const rnd: boolean = Math.random() < 0.5;
    setTravelCheck(rnd);
  }

  const clearOverlay = (): void => {
    setTravelCheck(null);
  };

  return (
    <div className="container">
      {travelCheck !== null && (
        <div>
          <div className={`relative checked-in ${travelCheck ? "" : "false"}`}>
            <button
              onClick={clearOverlay}
              className="absolute top-2 right-2 p-1 text-white hover:text-gray-200"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <p>{travelCheck ? "checked in" : "not checked in"}</p>
          </div>
        </div>
      )}

      {travelCheck === null && (
        <button className="circle" onClick={determineTravel}>
          Scan Rejsekort
        </button>
      )}
    </div>
  );
};

export default RejsekortScanButton;
