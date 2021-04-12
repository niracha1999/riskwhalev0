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
