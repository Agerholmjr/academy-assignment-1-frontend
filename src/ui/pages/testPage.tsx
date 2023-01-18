import React, { useEffect, useState } from 'react';
import { IonButton, IonPage, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { Link } from 'react-router-dom';


const testPage: React.FC = () => {
  

    return (
      <IonPage className="bg-gray-100 dark:bg-gray-800 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 overflow-auto">
          
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome to The FitnessPower
              </h1>
              <p className="text-small">Please login or create an account</p>
              <div className="flex justify-center">
              <button className="w-6/12 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 outline-double focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <Link to="/login" className="text-white">Login</Link>
               </button>
               </div>
               <div className="flex justify-center ">
               <button className="w-6/12 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 outline-double focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
               <Link to="/signup" className="text-white">Sign Up</Link>
               </button>
               </div>
          </div>
      </div>
  </IonPage>
    
    );
};

export default testPage;