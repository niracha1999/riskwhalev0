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
import "./bcmHome.css";

const bcmHome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color="light">
          <IonGrid>
            <IonRow>
              <IonCol size-xs="6" size-sm="3" size-md="4" size-lg="2">
                <IonButton size="large" fill="clear">
                  <IonImg
                    src="./assets/horizontal_logo_with_text.png"
                    alt="logo_with_text"
                  ></IonImg>
                </IonButton>
              </IonCol>
              <IonCol size="1"></IonCol>
              <IonCol size="2">
                <IonButton size="large" fill="clear">
                  <IonTitle>Business Impact Analysis</IonTitle>
                </IonButton>
              </IonCol>
              <IonCol size="1"></IonCol>
              <IonCol size="2">
                <IonButton size="large" fill="clear">
                  <IonTitle>Risk Assessment</IonTitle>
                </IonButton>
              </IonCol>
              <IonCol size="2"></IonCol>
              <IonCol size="2">
                <IonButton
                  size="large"
                  fill="clear"
                  routerLink="/signin"
                  routerDirection="root"
                >
                  <IonIcon
                    slot="start"
                    color="primary"
                    icon={personCircle}
                  ></IonIcon>
                  <IonTitle>Account</IonTitle>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonImg
          class="bcm-intro"
          src="/assets/bcm-intro.jpg"
          alt="bcm-intro"
        ></IonImg>
        <IonButton class="bcmStartButton" color="primary" size="large">
          Start
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default bcmHome;
