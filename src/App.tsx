import { Redirect, Route, useHistory } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonMenu,
  IonNav,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import CompanySignUp from "./pages/CompanySignUp";
import IndividualSignUp from "./pages/IndividualSignUp";
import SignIn from "./pages/SignIn";
import Functions from "./pages/Functions";
import biaHome from "./pages/biaHome";
import biaMain from "./pages/biaMain";
import raHome from "./pages/raHome";
import raMain from "./pages/raMain";
import RAstarter from "./pages/RAstarter";
import KeyPartners from "./pages/KeyPartners";

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
import React from "react";
import { ellipse, personCircle, square, triangle } from "ionicons/icons";
import RAtabs from "./pages/RAtabs";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/companysignup" component={CompanySignUp} exact={true} />
        <Route
          path="/individualsignup"
          component={IndividualSignUp}
          exact={true}
        />
        <Route path="/signin" component={SignIn} exact={true} />
        <Route path="/functions" component={Functions} exact={true} />
        <Route path="/biahome" component={biaHome} exact={true} />
        <Route path="/biamain" component={biaMain} exact={true} />
        <Route path="/rahome" component={raHome} exact={true} />
        <Route path="/ramain" component={raMain} exact={true} />
      </IonRouterOutlet>
      <IonHeader className="ion-no-border">
        <IonToolbar color="light">
          <IonGrid>
            <IonRow>
              <IonCol size-xs="6" size-sm="3" size-md="4" size-lg="2">
                <IonButton size="large" fill="clear" routerLink="/home">
                  <IonImg
                    src="./assets/horizontal_logo_with_text.png"
                    alt="logo_with_text"
                  ></IonImg>
                </IonButton>
              </IonCol>
              <IonCol size="1"></IonCol>
              <IonCol size="2">
                <IonButton size="large" fill="clear" routerLink="/biahome">
                  <IonTitle>Business Impact Analysis</IonTitle>
                </IonButton>
              </IonCol>
              <IonCol size="1"></IonCol>
              <IonCol size="2">
                <IonButton size="large" fill="clear" routerLink="/rahome">
                  <IonTitle>Risk Assessment</IonTitle>
                </IonButton>
              </IonCol>
              <IonCol size="2"></IonCol>
              <IonCol size="2">
                <IonButton
                  size="large"
                  fill="clear"
                  routerLink="/signin"
                  routerDirection="root"
                >
                  <IonIcon
                    slot="start"
                    color="primary"
                    icon={personCircle}
                  ></IonIcon>
                  <IonTitle>Account</IonTitle>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <RAtabs />
    </IonReactRouter>
  </IonApp>
);

export default App;
