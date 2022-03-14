import { greet } from "./utils/greet";

function App(): JSX.Element {
  return <h1>{greet("fola")}</h1>;
}

export default App;
