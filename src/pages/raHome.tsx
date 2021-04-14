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

const raHome: React.FC = () => {
  return (
    <IonPage>
      
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
    </IonPage>
  );
};

export default raHome;
