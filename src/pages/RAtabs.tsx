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
  IonButton,
  IonMenuButton,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import KeyPartners from "./KeyPartners";

const RAtabs: React.FC = ({children}) => {
  return (
    <IonSplitPane contentId="ra">
      <IonMenu contentId="ra">
        <IonButton size="large" color="dark" fill="clear" routerLink="/keypartners">
          <IonTitle>Key Partners</IonTitle>
        </IonButton>
        <IonButton size="large" color="dark" fill="clear" routerLink="/keyactivities">
          <IonTitle>Key Activities</IonTitle>
        </IonButton>
        <IonButton size="large" color="dark" fill="clear" routerLink="/valuepropositions">
          <IonTitle>Value Propositions</IonTitle>
        </IonButton>
        <IonButton size="large" color="dark" fill="clear" routerLink="/customerrelationships">
          <IonTitle>Customer Relationships</IonTitle>
        </IonButton>
        <IonButton size="large" color="dark" fill="clear" routerLink="/customersegments">
          <IonTitle>Customer Segments</IonTitle>
        </IonButton>
        <IonButton size="large" color="dark" fill="clear" routerLink="/coststructure">
          <IonTitle>Cost Structure</IonTitle>
        </IonButton>
        <IonButton size="large" color="dark" fill="clear" routerLink="/revenuestreams">
          <IonTitle>Revenue Streams</IonTitle>
        </IonButton>
        <IonButton size="large" color="dark" fill="clear" routerLink="/keyresources">
          <IonTitle>Key Resources</IonTitle>
        </IonButton>
        <IonButton size="large" color="dark" fill="clear" routerLink="/channels">
          <IonTitle>Channels</IonTitle>
        </IonButton>
      </IonMenu>
      <IonPage id="ra">
        {children}
      </IonPage>
    </IonSplitPane>
  );
};

export default RAtabs;
