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
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardContent,
} from "@ionic/react";
import { chevronDown, personCircle } from "ionicons/icons";
import React from "react";
import "./Functions.css";

const Functions: React.FC = () => {
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
        <IonGrid>
          <IonCol>
            <IonCard class="functions-card" color="transparent">
              <IonCardHeader class="functions-title">
                {" "}
                Business Model Canvas{" "}
              </IonCardHeader>
              <IonButton class="functions-button-1" color="secondary">
                View or edit canvas
              </IonButton>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard class="functions-card" color="transparent">
              <IonCardHeader class="functions-title">
                {" "}
                List of Functional Areas{" "}
              </IonCardHeader>
              <IonCardContent>
                <IonButton class="functions-button-2" color="secondary">
                  View or edit areas
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Functions;
