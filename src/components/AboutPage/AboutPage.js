import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div id = "feedback">
      <h1 id = "about">
        No one likes to have needle procedures, especially kids. But there are things we can do to make needles less painful. Evidence supports that if we practice these techniques children will have less pain with needle procedures (like immunizations, lab draws or IV starts). Comfort Promise is a web-based application that enables healthcare professionals access to the educational resources of how to best comfort their patients and minimize the trauma of the procedures they are performing. This application not only aims at equipping medical staff with age appropriate interventions, but also allows them to leave feedback for hospital administrators on how the procedure went and inform them of additional support or resources needed.
      </h1>
    </div>
  </div>
);

export default AboutPage;
