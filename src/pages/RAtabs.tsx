import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
  IonSplitPane,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import KeyPartners from "./KeyPartners";

const RAtabs: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="RA-header">
        <IonToolbar color="primary">
          <IonTitle>Risk Assessment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/keypartners">
            <KeyPartners />
          </Route>
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
    </IonPage>
  );
};

export default RAtabs;
