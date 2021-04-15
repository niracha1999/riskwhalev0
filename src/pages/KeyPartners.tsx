import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRange,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { sunny, trash } from "ionicons/icons";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExploreContainer from "../components/ExploreContainer";

import "./KeyPartners.css";
import RAtabs from "./RAtabs";

const KeyPartners: React.FC = () => {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      risk: "",
      risktype: "",
      financial: { lower: 0, upper: 0 },
      health: { lower: 0, upper: 0 },
      natural: { lower: 0, upper: 0 },
      social: { lower: 0, upper: 0 },
      government: { lower: 0, upper: 0 },
      legal: { lower: 0, upper: 0 },
      likelihood: "",
      acceptance: "",
    },
  ]);

  const addField = () => {
    {
      setInputFields([
        ...inputFields,
        {
          id: uuidv4(),
          risk: "",
          risktype: "",
          financial:{ lower: 0, upper: 0 },
          health: { lower: 0, upper: 0 },
          natural: { lower: 0, upper: 0 },
          social: { lower: 0, upper: 0 },
          government: { lower: 0, upper: 0 },
          legal: { lower: 0, upper: 0 },
          likelihood: "",
          acceptance: "",
        },
      ]);
    }
  };

  const onChange = (
    id: string,
    event:
      | React.FormEvent<HTMLIonSelectElement>
      | React.FormEvent<HTMLIonInputElement>
      | React.FormEvent<HTMLIonRangeElement>
  ) => {
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

  const customPopoverOptions = {
    message: "Select type of risk according to this risk",
  };
  return (
    <IonPage>
     
      <IonContent color="light">
        <IonTitle class="kp-title" color="primary">
          Key Partners
        </IonTitle>

        {inputFields.map((inputField) => (
          <IonGrid key={inputField.id}>
            <IonItem class="RA-item" color="transparent">
              <IonTitle>Type of Risk</IonTitle>
              <IonSelect
                interface="popover"
                interfaceOptions={customPopoverOptions}
                value={inputField.risktype}
                onChange={(event) => onChange(inputField.id, event)}
              >
                <IonSelectOption value="strategy-risk">
                  Strategy Risk
                </IonSelectOption>
                <IonSelectOption value="operational-risk">
                  Operational Risk
                </IonSelectOption>
                <IonSelectOption value="financial-risk">
                  Financial Risk
                </IonSelectOption>
                <IonSelectOption value="conpliance-risk">
                  Compliance Risk
                </IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonCard class="container" color="secondary">
              <IonItem color="light" class="risk-item">
                <IonLabel>Risk</IonLabel>
                <IonInput
                  required
                  value={inputField.risk}
                  onChange={(event) => onChange(inputField.id, event)}
                ></IonInput>
              </IonItem>
              <IonList class="impact-list">
                <IonTitle class="impact-list-header">Impacts</IonTitle>
                <IonItem color="transparent">
                  <IonTitle class="impact-title">Financial</IonTitle>
                  <IonRange
                    min={1}
                    max={5}
                    step={1}
                    pin={true}
                    snaps={true}
                    ticks={true}
                    class="impact-range"
                    value={inputField.financial}
                    onChange={(event) => onChange(inputField.id, event)}
                  >
                    <IonLabel color="primary" slot="start">
                      Least Impact
                    </IonLabel>
                    <IonLabel color="primary" slot="end">
                      Most Impact
                    </IonLabel>
                  </IonRange>
                </IonItem>
                <IonItem color="transparent">
                  <IonTitle class="impact-title">Health and safety</IonTitle>
                  <IonRange
                    min={1}
                    max={5}
                    step={1}
                    pin={true}
                    snaps={true}
                    ticks={true}
                    class="impact-range"
                    value={inputField.health}
                    onChange={(event) => onChange(inputField.id, event)}
                  >
                    <IonLabel color="primary" slot="start">
                      Least Impact
                    </IonLabel>
                    <IonLabel color="primary" slot="end">
                      Most Impact
                    </IonLabel>
                  </IonRange>
                </IonItem>
                <IonItem color="transparent">
                  <IonTitle class="impact-title">Natural environment</IonTitle>
                  <IonRange
                    min={1}
                    max={5}
                    step={1}
                    pin={true}
                    snaps={true}
                    ticks={true}
                    color="primary"
                    class="impact-range"
                    value={inputField.natural}
                    onChange={(event) => onChange(inputField.id, event)}
                  >
                    <IonLabel color="primary" slot="start">
                      Least Impact
                    </IonLabel>
                    <IonLabel color="primary" slot="end">
                      Most Impact
                    </IonLabel>
                  </IonRange>
                </IonItem>
                <IonItem color="transparent">
                  <IonTitle class="impact-title">
                    Social / Cultutal Heritage
                  </IonTitle>
                  <IonRange
                    min={1}
                    max={5}
                    step={1}
                    pin={true}
                    snaps={true}
                    ticks={true}
                    color="primary"
                    class="impact-range"
                    value={inputField.social}
                    onChange={(event) => onChange(inputField.id, event)}
                  >
                    <IonLabel color="primary" slot="start">
                      Least Impact
                    </IonLabel>
                    <IonLabel slot="end">Most Impact</IonLabel>
                  </IonRange>
                </IonItem>
                <IonItem color="transparent">
                  <IonTitle class="impact-title">
                    Government / Reputation
                  </IonTitle>
                  <IonRange
                    min={1}
                    max={5}
                    step={1}
                    pin={true}
                    snaps={true}
                    ticks={true}
                    color="primary"
                    class="impact-range"
                    value={inputField.government}
                    onChange={(event) => onChange(inputField.id, event)}
                  >
                    <IonLabel color="primary" slot="start">
                      Least Impact
                    </IonLabel>
                    <IonLabel color="primary" slot="end">
                      Most Impact
                    </IonLabel>
                  </IonRange>
                </IonItem>
                <IonItem color="transparent">
                  <IonTitle class="impact-title">Legal</IonTitle>
                  <IonRange
                    min={1}
                    max={5}
                    step={1}
                    pin={true}
                    snaps={true}
                    ticks={true}
                    color="primary"
                    class="impact-range"
                    value={inputField.legal}
                    onChange={(event) => onChange(inputField.id, event)}
                  >
                    <IonLabel color="primary" slot="start">
                      Least Impact
                    </IonLabel>
                    <IonLabel color="primary" slot="end">
                      Most Impact
                    </IonLabel>
                  </IonRange>
                </IonItem>
              </IonList>
              <IonItem color="light" class="likelihood-item">
                <IonLabel class="likelihood-label">Likelihood</IonLabel>
                <IonInput
                  type="number"
                  class="likelihood-input"
                  value={inputField.likelihood}
                  onChange={(event) => onChange(inputField.id, event)}
                ></IonInput>
                <IonLabel class="percent">%</IonLabel>
              </IonItem>
              <IonItem color="light" class="acceptance-item">
                <IonTitle class="acceptance-label">
                  Level of Acceptance
                </IonTitle>
                <IonSelect
                  interface="popover"
                  interfaceOptions={customPopoverOptions}
                  value={inputField.acceptance}
                  onChange={(event) => onChange(inputField.id, event)}
                >
                  <IonSelectOption value="desirable">Desirable</IonSelectOption>
                  <IonSelectOption value="acceptable">
                    Acceptable
                  </IonSelectOption>
                  <IonSelectOption value="undesirable">
                    Undesirable
                  </IonSelectOption>
                  <IonSelectOption value="unacceptable">
                    Unacceptable
                  </IonSelectOption>
                  <IonSelectOption value="catastrophic">
                    Catastrophic
                  </IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonButton
                color="danger"
                size="small"
                disabled={inputFields.length === 1}
                onClick={() => removeField(inputField.id)}
              >
                <IonIcon icon={trash}></IonIcon>
              </IonButton>
            </IonCard>
          </IonGrid>
        ))}
        <IonButton color="secondary" class="addRiskButton" onClick={addField}>
          Add more Risk
        </IonButton>
        <IonButton class="RA-next" color="primary" routerLink="/RAResult">Next</IonButton>
        <IonItem class="bottom-space2" color="transparent"></IonItem>
      </IonContent>
    </IonPage>
  );
};
export default KeyPartners;
