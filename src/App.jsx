import { useState } from "react";
import "./App.css";
import MapAndFilter from "./MapAndFilter/MapAndFilter";
import States from "./States/States";
import ClassCom from "./States/ClassCom";
import Parent from "./Props/Parent";
import EventHandling from "./EventHandling/EventHandling";
import DynamicInput from "./DynamicInput/DynamicInput";
import CssStyles from "./CSSStyles/CssStyles";
import InnerHtml from "./InnerHtml/InnerHtml";
import ReactFragment from "./ReactFragments/ReactFragment";
import UncontrolledCon from "./UncontrolledControlledCom/UncontrolledCon";
import APIRequests from "./APIRequests/APIRequests";
import DeBounce from "./DeBounnce/DeBounce";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MapAndFilter />
      <States />
      <ClassCom />
      <Parent />
      <EventHandling />
      <DynamicInput />
      <CssStyles />
      <InnerHtml />
      <ReactFragment />
      <UncontrolledCon />
      <APIRequests />
      <DeBounce />
    </div>
  );
}

export default App;
