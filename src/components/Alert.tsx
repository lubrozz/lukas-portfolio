import { ReactNode } from "react";

interface Props {
  children: ReactNode; //ReactNode as a type lets you pass more complex structures, such as HTML, instead of a string.
  onClose: () => void;
}

/**
 * Using bootstrap doc to setup an alert with a dismissal button.
 * The dismissal button uses the onClick to set the state to false when clicked (aka not visible.)
 */

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
