import React, { ReactNode } from "react";
import NavBar from "../components/CV-Page/NavBar";
import Contact from "../components/CV-Page/Contact";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <header className="double-element">
        <div>
          <h2 style={{ whiteSpace: "nowrap", margin: 0 }}>
            Lukas Corlin Østergaard
          </h2>
        </div>
        <div>
          <NavBar />
        </div>
      </header>
      <hr className="solid-line"></hr>
      <br></br>
      <main className="center-box text-center">{children}</main>
      <hr className="solid-line"></hr>
      <footer>
        <div>
          <Contact />
        </div>
      </footer>
    </div>
  );
};
export default MainLayout;
