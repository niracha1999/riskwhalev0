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
} from "@ionic/react";
import { chevronDown, personCircle } from "ionicons/icons";
import React from "react";
import "./Home.css";
import RAtabs from "./RAtabs";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="light">
        <IonImg
          class="hero-img"
          src="/assets/home_hero_pic.jpg"
          alt="home_hero_pic"
        ></IonImg>
        <IonButton class="startButton" color="primary" size="large">
          Start Planning
        </IonButton>

        <IonIcon
          class="chevron_icon"
          color="secondary"
          size="large"
          icon={chevronDown}
        ></IonIcon>

        <IonImg
          class="info-img"
          src="/assets/home_bcm_info.jpg"
          alt="home_bcm_info"
        ></IonImg>
      </IonContent>
    </IonPage>
  );
};

export default Home;
