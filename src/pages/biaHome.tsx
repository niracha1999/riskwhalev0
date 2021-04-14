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
import "./biaHome.css";

const biaHome: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent color="light">
        <IonImg
          class="bcm-intro"
          src="/assets/bcm-intro.jpg"
          alt="bcm-intro"
        ></IonImg>
        <IonButton class="bcmStartButton" color="primary" size="large" routerLink="/RAstarter">
          Start
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default biaHome;
