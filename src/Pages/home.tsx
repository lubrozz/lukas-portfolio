import MainLayout from "../Layout/MainLayout";
import AboutMe from "../components/AboutMe";
import WorkExperience from "../components/WorkExperience";
import QuickAbout from "../components/QuickAbout";
import VolunteerExperience from "../components/VolunteerExperience";

/**
 * --------The Alert--------
 * Instead of doing conditional if statements, you can use && in JS.
 * true && 1 === 1
 * false && 1 === false
 *
 * Thus only rendering the alert if the first is true.
 * This is used in the <Alert> element. Calling the onClose function (created in the component interface)
 * and then using the 'setAlertVisibility' to set the state to false. The onClose is set to be called onClick in the component.
 *
 *
 * -------The Button--------
 * With the interface created in the 'Button' component, you pass the arguments in the Button element.
 * here, we set the color to 'primary' and the onClick gets a function (here logging times clicked.).
 * Finally, the "children" string is set between the two <Button> and thus is the text for the button.
 *
 */

function Home() {
  return (
    <MainLayout>
      <br />
      <i>
        🚧 Hello and welcome to my page! I am currently learning front-end
        development using React (vite and .tsx) to make this page. So it is
        still under construction! 🚧
      </i>
      <br />
      <br />
      <QuickAbout />
      <br />
      <AboutMe />
      <br />
      <WorkExperience />
      <br />
      <VolunteerExperience />
    </MainLayout>
  );
}

export default Home;
