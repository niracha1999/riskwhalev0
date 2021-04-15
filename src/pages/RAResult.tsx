import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonImg,
  IonIcon,
  IonItem,
} from "@ionic/react";
import { chevronDown, personCircle } from "ionicons/icons";
import React from "react";
import "./RAResult.css";
import RAtabs from "./RAtabs";

const RAResult: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="light">
        
        <IonTitle>Risk Matrix</IonTitle>
        <IonTitle>List of Risks</IonTitle>

      </IonContent>
    </IonPage>
  );
};

export default RAResult;
