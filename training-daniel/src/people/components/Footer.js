import { applicationFooter } from "../PeopleApplicationContext";
import ClockComponentC from "./ClockComponentC";
import ClockComponentF from "./ClockComponentF";

function Footer() {
  return (
    <footer>
      <p>{applicationFooter}</p>
      <ClockComponentC />
      <ClockComponentF />
    </footer>
  );
}

export default Footer;
