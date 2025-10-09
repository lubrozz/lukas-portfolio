import { ReactNode } from "react";
import BackToHomeButton from "../components/BackToHomeButton";
import OnePageBackButton from "../components/OnePageBackButton";

interface FitnessLayoutProps {
  headerText: string;
  children: ReactNode;
}

const FitnessLayout = ({ headerText, children }: FitnessLayoutProps) => {
  return (
    <>
      <div className="dark-theme">
        <header>
          <div
            className="col-container"
            style={{ justifyContent: "left", margin: "0.6rem" }}
          >
            <div className="my-col">
              <OnePageBackButton />
            </div>
            <div className="FitnessHeader my-col">
              <h1>{headerText}</h1>
            </div>
          </div>
        </header>
        <main>{children}</main>

        <footer>
          <p>I am not a designer, bare with me.</p>
        </footer>
      </div>
    </>
  );
};

export default FitnessLayout;
