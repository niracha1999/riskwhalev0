import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonInput,
  IonCard,
  IonCardHeader,
} from "@ionic/react";
import { personCircle } from "ionicons/icons";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import "./IndividualSignUp.css";

const ScrollToPoint = () => {
  let list = document.querySelector("ion-content");
  return list && list.scrollToPoint(0, 710);
};

const IndividualSignUp: React.FC<RouteComponentProps> = (props) => {
  const template = { dept: " " };
  const [fields, setFields] = useState([template]);
  const addField = () => {
    {
      setFields([...fields, template]);
    }
    console.log(fields);
  };

  const onChange = (e: React.FormEvent<HTMLIonInputElement>, index: number) => {
    const updatedFields = fields.map((field, i) =>
      index == i
        ? Object.assign(field, {
            [e.currentTarget.name]: e.currentTarget.value,
          })
        : field
    );
    setFields(updatedFields);
  };

  const removeField = (index: number) => {
    const filteredFields = [...fields];
    filteredFields.splice(index, 1);
    setFields(filteredFields);
  };

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
      <IonContent color="primary" scrollEvents={true}>
        <IonGrid>
          <IonRow>
            <IonLabel class="label">Individual Registration</IonLabel>
            <IonLabel class="label2">Account</IonLabel>
            <IonCard class="accountcard" color="light">
              <IonItem class="accountitem" color="light">
                <IonLabel class="input-label" position="floating">
                  E-mail *
                </IonLabel>
                <IonInput
                  required
                  type="email"
                  placeholder="required"
                ></IonInput>
              </IonItem>

              <IonItem class="accountitem" color="light">
                <IonLabel class="input-label" position="floating">
                  Password *
                </IonLabel>
                <IonInput
                  required
                  type="password"
                  placeholder="password must be at least 8 characters"
                ></IonInput>
              </IonItem>

              <IonItem class="accountitem" color="light">
                <IonLabel class="input-label" position="floating">
                  Confirm Password *
                </IonLabel>
                <IonInput
                  required
                  type="password"
                  placeholder="re-type password"
                ></IonInput>
              </IonItem>
            </IonCard>

            <IonImg
              class="individualRegisterImg"
              src="assets/individualregister_pic.jpg"
              alt="individualregister_pic"
            ></IonImg>
          </IonRow>
          <IonRow>
            <IonButton
              onClick={ScrollToPoint}
              class="scrolltomiddleButton"
              color="light"
              size="large"
              fill="outline"
            >
              Next
            </IonButton>
          </IonRow>
        </IonGrid>
        <IonLabel class="personal-label">Personal Information</IonLabel>
        <IonCard class="namecard" color="light">
          <IonCardHeader class="name-label">Full Name *</IonCardHeader>
          <IonItem color="light">
            <IonInput
              required
              placeholder="Insert your full name"
              class="input-text"
            ></IonInput>
          </IonItem>
        </IonCard>

        <IonCard class="occupationcard" color="light">
          <IonCardHeader class="name-label">Role in the Organization *</IonCardHeader>
          <IonItem color="light">
            <IonInput
              required
              placeholder="What is your occupation?"
              class="input-text"
            ></IonInput>
          </IonItem>
        </IonCard>

        <IonCard class="institutecard" color="light">
          <IonCardHeader class="name-label">
            Institute or Organization Name
          </IonCardHeader>
          <IonItem color="light">
            <IonInput
              placeholder="Insert Institute or Organization Name"
              class="input-text"
            ></IonInput>
          </IonItem>
        </IonCard>
        <IonButton class="registerButton2" color="light" size="large">
          Register
        </IonButton>
       <IonItem class="bottom-space" color="transparent"></IonItem>

        <IonCol></IonCol>
      </IonContent>
    </IonPage>
  );
};

export default IndividualSignUp;
