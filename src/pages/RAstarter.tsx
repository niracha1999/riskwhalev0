import {
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import React from "react";
import { Redirect, Route } from "react-router";
import KeyPartners from "./KeyPartners";

import RAtabs from "./RAtabs";

const RAstarter: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/keypartners">
          <KeyPartners />
        </Route>

        <Route exact path="/">
          <Redirect to="/tab1" />
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
        <IonTabButton tab="customerrelationships" href="/customerrelationships">
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
  );
};

export default RAstarter;
