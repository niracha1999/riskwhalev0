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
} from "@ionic/react";
import { personCircle } from "ionicons/icons";
import React from "react";
import "./raHome.css";
import RAtabs from "./RAtabs";

const raHome: React.FC = () => {
  return (
    <RAtabs>
      <IonContent color="light">
        <IonImg
          class="ra-intro"
          src="/assets/ra-intro.jpg"
          alt="ra-intro"
        ></IonImg>
        <IonButton class="raStartButton" color="primary" size="large" routerLink="RAstarter">
          Start
        </IonButton>
      </IonContent>
    </RAtabs>
  );
};

export default raHome;
