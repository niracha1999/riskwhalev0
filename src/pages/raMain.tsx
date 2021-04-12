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
  IonMenuButton,
  IonItem,
  IonCard,
} from "@ionic/react";
import { personCircle } from "ionicons/icons";
import React from "react";
import "./raMain.css";

const raMain: React.FC = () => {
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
        <IonToolbar color="primary">
          <IonTitle>Risk Assessment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonRow>
          <IonToolbar class="toolbar">
            <IonItem color="secondary">
              <IonTitle>Key Partners</IonTitle>
            </IonItem>
            <IonItem color="secondary">
              <IonTitle>Key Activities</IonTitle>
            </IonItem>
            <IonItem color="secondary">
              <IonTitle>Value Propositions</IonTitle>
            </IonItem>
            <IonItem color="secondary">
              <IonTitle>Customer Relationships</IonTitle>
            </IonItem>
            <IonItem color="secondary">
              <IonTitle>Customer Segments</IonTitle>
            </IonItem>
            <IonItem color="secondary">
              <IonTitle>Cost Structure</IonTitle>
            </IonItem>
            <IonItem color="secondary">
              <IonTitle>Revenue Streams</IonTitle>
            </IonItem>
            <IonItem color="secondary">
              <IonTitle>Key Resources</IonTitle>
            </IonItem>
            <IonItem color="secondary">
              <IonTitle>Channels</IonTitle>
            </IonItem>
          </IonToolbar>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default raMain;
