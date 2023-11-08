import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const driverObj = driver({
  showProgress: true,
  steps: [
    {
      element: "#taufik",
      popover: {
        title: "Animated Tour Example",
        description:
          "Here is the code example showing animated tour. Let's walk you through it.",
        side: "left",
        align: "start",
      },
    },
    {
      element: "#span",
      popover: {
        title: "Import the Library",
        description:
          "It works the same in vanilla JavaScript as well as frameworks.",
        side: "bottom",
        align: "start",
      },
    },

    {
      element: "#div",
      popover: {
        title: "Import the Library",
        description:
          "It works the same in vanilla JavaScript as well as frameworks.",
        side: "bottom",
        align: "start",
      },
    },
  ],
});

driverObj.drive();
function App() {
  return (
    <>
      <h1 id="taufik">taufik islam</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sed
        temporibus, aperiam quia voluptatum ipsam libero consequatur ullam
        placeat eius, dignissimos, aspernatur{" "}
        <span id="span" style={{ background: "green" }}>
          vitae{" "}
        </span>
        ratione voluptate quo nostrum dolorem consectetur? A!
      </p>

      <div
        id="div"
        style={{ width: "400px", height: "200px", background: "red" }}
      >
        say something about yourself
      </div>
    </>
  );
}

export default App;
