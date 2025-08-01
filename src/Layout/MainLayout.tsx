import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";

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
      <footer className="text-center">
        <div className="solid-box">
          <h2>--------Here is the footer---------</h2>
        </div>
      </footer>
    </div>
  );
};
export default MainLayout;
