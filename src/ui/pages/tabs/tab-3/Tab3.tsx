import React, { useState } from 'react';
import { IonContent, IonTitle } from '@ionic/react';
import StopWatch from 'ui/components/timer/stopwatch';

const Tab3: React.FC = () => (
  
  <IonContent color={'white-background'}>
    <IonTitle>Tab3</IonTitle>
    <StopWatch></StopWatch>
  </IonContent>
);

export default Tab3;
