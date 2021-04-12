import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonSplitPane,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonList,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import KeyPartners from "./KeyPartners";

const RAtabs: React.FC = () => {
  let history = useHistory();
  console.log("history :", history);

  return (
    <IonReactRouter>
      <IonMenu menuId="RAMenu" contentId="RAMenu">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Risk Assessment</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/keypartners" component={KeyPartners} exact={true} />
            </IonRouterOutlet>

            <IonTabBar slot="top" color="secondary">
              <IonTabButton tab="keypartners" href="/keypartners">
                <IonTitle>Key Partners</IonTitle>
              </IonTabButton>
              <IonTabButton tab="keyactivities" href="/keyactivities">
                <IonTitle>Key Activities</IonTitle>
              </IonTabButton>
              <IonTabButton tab="valuepropositions" href="/valuepropositions">
                <IonTitle>Value Propositions</IonTitle>
              </IonTabButton>
              <IonTabButton
                tab="customerrelationships"
                href="/customerrelationships"
              >
                <IonTitle>Customer Relationships</IonTitle>
              </IonTabButton>
              <IonTabButton tab="customersegments" href="/customersegments">
                <IonTitle>Customer Segments</IonTitle>
              </IonTabButton>
              <IonTabButton tab="coststructure" href="/coststructure">
                <IonTitle>Cost Structure</IonTitle>
              </IonTabButton>
              <IonTabButton tab="revenuestreams" href="/revenuestreams">
                <IonTitle>Revenue Streams</IonTitle>
              </IonTabButton>
              <IonTabButton tab="keyresources" href="/keyresources">
                <IonTitle>Key Resources</IonTitle>
              </IonTabButton>
              <IonTabButton tab="channels" href="/channels">
                <IonTitle>Channels</IonTitle>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonMenu>
    </IonReactRouter>
  );
};

export default RAtabs;
