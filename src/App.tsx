import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import CompanySignUp from "./pages/CompanySignUp";
import IndividualSignUp from "./pages/IndividualSignUp";
import SignIn from "./pages/SignIn";
import Functions from "./pages/Functions";
import biaHome from "./pages/biaHome";
import biaMain from "./pages/biaMain";
import raHome from "./pages/raHome";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/companysignup" component={CompanySignUp} exact={true} />
        <Route
          path="/individualsignup"
          component={IndividualSignUp}
          exact={true}
        />
        <Route path="/home" component={Home} exact={true} />
        <Route path="/signin" component={SignIn} exact={true} />
        <Route path="/functions" component={Functions} exact={true} />
        <Route path="/biahome" component={biaHome} exact={true} />
        <Route path="/biamain" component={biaMain} exact={true} />
        <Route path="/rahome" component={raHome} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
