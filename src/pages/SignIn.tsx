import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonCard,
  IonText,
} from "@ionic/react";
import { lockClosed, person, personCircle } from "ionicons/icons";
import React from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import "./SignIn.css";

const SignIn: React.FC<RouteComponentProps> = (props) => {
  const authen = () => {};

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
                <IonButton size="large" fill="clear">
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
          <IonRow>
            <IonImg
              class="image"
              src="./assets/main_label.png"
              alt="logo"
            ></IonImg>
          </IonRow>

          <IonRow>
            <IonCard class="card" color="light">
              <IonItem color="transparent">
                <IonIcon slot="start" color="primary" icon={person}></IonIcon>
                <IonLabel position="stacked" color="tertiary">
                  Username
                </IonLabel>
                <IonInput required></IonInput>
              </IonItem>
              <IonItem class="item" color="transparent">
                <IonIcon
                  slot="start"
                  color="primary"
                  icon={lockClosed}
                ></IonIcon>
                <IonLabel position="stacked" color="tertiary">
                  Password
                </IonLabel>
                <IonInput required type="password"></IonInput>
              </IonItem>
            </IonCard>
          </IonRow>

          <IonButton class="signinButton" color="primary" size="large">
            Sign In
          </IonButton>

          <IonText class="text">Don’t have account? Register for free!</IonText>

          <IonButton
            class="companyRegisterButton"
            color="light"
            size="large"
            routerLink="/companysignup"
            routerDirection="root"
          >
            Register as a company
          </IonButton>

          <IonButton
            class="individualRegisterButton"
            color="light"
            size="large"
            routerLink="/individualsignup"
            routerDirection="root"
          >
            Register as an individual
          </IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
