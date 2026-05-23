import { useState } from "react";

import AppRouter from "./router/AppRouter";
import IntroScreen from "./components/intro/IntroScreen";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative">
      {/* vrai portfolio */}
      <AppRouter />

      {/* intro */}
      {!entered && <IntroScreen onComplete={() => setEntered(true)} />}
    </div>
  );
}

export default App;
