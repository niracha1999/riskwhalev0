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
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import React from "react";
import "./KeyPartners.css";

const KeyPartners: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel color="tertiary">Username</IonLabel>
          <IonInput required> </IonInput>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default KeyPartners;
