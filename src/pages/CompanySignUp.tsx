import { FilesystemDirectory } from "@capacitor/core";
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
import { arrowDownOutline, personCircle, trash } from "ionicons/icons";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./CompanySignUp.css";

const scrollToBottom = () => {
  let list = document.querySelector("ion-content");
  return list && list.scrollToBottom();
};

const ScrollToPoint = () => {
  let list = document.querySelector("ion-content");
  return list && list.scrollToPoint(0, 710);
};

const CompanySignUp: React.FC<RouteComponentProps> = (props) => {
  const [inputFields, setInputFields] = useState([{ id: uuidv4(), dept: "" }]);

  const addField = () => {
    {
      setInputFields([...inputFields, { id: uuidv4(), dept: "" }]);
    }
  };

  const onChange = (id: string,event: React.FormEvent<HTMLIonInputElement>) => {
    const newInputFields = inputFields.map((i: any) => {
      if (id === i.id) {
        i[event.currentTarget.name] = event.currentTarget.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const removeField = (id: any) => {
    const filteredFields = [...inputFields];
    filteredFields.splice(
      filteredFields.findIndex((value) => value.id === id),
      1
    );
    setInputFields(filteredFields);
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
            <IonLabel class="label">Company Registration</IonLabel>
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
              class="companyRegisterImg"
              src="assets/companyregister_pic.jpg"
              alt="companyregister_pic"
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

        <IonCard class="companynamecard" color="light">
          <IonCardHeader class="company-label">Company Name *</IonCardHeader>
          <IonItem color="light">
            <IonInput
              required
              placeholder="Insert your company name"
              class="input-text-company"
            ></IonInput>
          </IonItem>
        </IonCard>

        <IonCard class="bmccard" color="light">
          <IonCardHeader class="company-label">
            Business Model Canvas *
          </IonCardHeader>
          <IonItem color="light">
            <IonLabel>Key Partners</IonLabel>
            <IonInput
              required
              placeholder="List the partners that you can’t do business without."
              class="input-text-company"
            ></IonInput>
          </IonItem>
          <IonItem color="light">
            <IonLabel>Key Activities</IonLabel>
            <IonInput
              required
              placeholder="What do you do every day to run your business model?"
              class="input-text-company"
            ></IonInput>
          </IonItem>
          <IonItem color="light">
            <IonLabel>Key Resources</IonLabel>
            <IonInput
              required
              placeholder="The people, knowledge, means, and money you need to run your business."
              class="input-text-company"
            ></IonInput>
          </IonItem>
          <IonItem color="light">
            <IonLabel>Value Propositions</IonLabel>
            <IonInput
              required
              placeholder="What are your products and services? What is the job you get done for your customer?"
              class="input-text-company"
            ></IonInput>
          </IonItem>
          <IonItem color="light">
            <IonLabel>Customer Relationships</IonLabel>
            <IonInput
              required
              placeholder="How does this show up and how do you maintain the relationship?"
              class="input-text-company"
            ></IonInput>
          </IonItem>
          <IonItem color="light">
            <IonLabel>Channels</IonLabel>
            <IonInput
              required
              placeholder="How do you communicate with your customer? How do you deliver the value proposition?"
              class="input-text-company"
            ></IonInput>
          </IonItem>
          <IonItem color="light">
            <IonLabel>Customer Segments</IonLabel>
            <IonInput
              required
              placeholder="List the top segments. Look for the segments that provide the most revenue."
              class="input-text-company"
            ></IonInput>
          </IonItem>
          <IonItem color="light">
            <IonLabel>Cost Structure</IonLabel>
            <IonInput
              required
              placeholder="List your top costs by looking at activities and resources."
              class="input-text-company"
            ></IonInput>
          </IonItem>
          <IonItem color="light">
            <IonLabel>Revenue Streams</IonLabel>
            <IonInput
              required
              placeholder="List your top three revenue streams. If you do things for free, add them here too."
              class="input-text-company"
            ></IonInput>
          </IonItem>
        </IonCard>

        <IonButton
          onClick={scrollToBottom}
          class="scrolltobottomButton"
          color="light"
          fill="outline"
          size="large"
        >
          Next
        </IonButton>
        <IonLabel class="department-label" color="light">
          List of Functional Areas*
        </IonLabel>
        <IonCol></IonCol>
        <IonCol class="department-card">
          {inputFields.map((inputField) => (
            <IonGrid key={inputField.id}>
              <IonIcon
                color="light"
                size="large"
                class="department-arrow"
                icon={arrowDownOutline}
              ></IonIcon>

              <IonCard>
                <IonItem color="light">
                  <IonInput
                    required
                    placeholder="Insert a functional department in order according to process."
                    class="input-text-department"
                    onChange={(event) => onChange(inputField.id, event)}
                    value={inputField.dept}
                  ></IonInput>

                  <IonButton
                    color="danger"
                    size="small"
                    disabled={inputFields.length === 1}
                    onClick={() => removeField(inputField.id)}
                  >
                    <IonIcon icon={trash}></IonIcon>
                  </IonButton>
                </IonItem>
              </IonCard>
            </IonGrid>
          ))}
          <IonButton color="secondary" class="addDeptButton" onClick={addField}>
            Add more area
          </IonButton>
          <IonCard class="signaturecard" color="light">
            <IonCardHeader class="company-label">
              Confirm by typing your name here *
            </IonCardHeader>
            <IonItem color="light">
              <IonInput
                required
                placeholder="Please type your full name"
                class="input-text-company"
              ></IonInput>
            </IonItem>
          </IonCard>

          <IonButton class="registerButton1" color="light" size="large">
            Register
          </IonButton>
        </IonCol>
        <IonCol></IonCol>
        <IonItem class="bottom-space2" color="transparent"></IonItem>
      </IonContent>
    </IonPage>
  );
};

export default CompanySignUp;
