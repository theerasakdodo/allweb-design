import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../../Page/About";
import Contact from "../../Page/Contact";
import Home from "../../Page/Home";
import PrintDesign from "../../Page/PrintDesign";
import WebDesign from "../../Page/WebDesign";
import ScrollToTop from "../../scoll";
export default function Routes() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/printdesign" component={PrintDesign} />
        <Route exact path="/webdesign" component={WebDesign} />
      </Switch>
    </>
  );
}
