import React from "react";
import Boot from "./Helper/boot";
import Layout from "./Components/Layout";

const App = () => {
  return <Layout />;
};

Boot()
  .then(() => App())
  .catch((error) => error);

export default App;
