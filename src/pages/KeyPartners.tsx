import {
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import React from "react";
import ExploreContainer from "../components/ExploreContainer";

import "./KeyPartners.css";
import RAtabs from "./RAtabs";

const KeyPartners: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard className="container">
          <IonTitle>Ready to create an app?</IonTitle>

          <IonInput></IonInput>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default KeyPartners;
