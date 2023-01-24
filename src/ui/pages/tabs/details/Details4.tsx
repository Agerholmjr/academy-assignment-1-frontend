import React, {} from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import img from 'static/assets/img/gym.jpeg';
import { useEffect, useState } from 'react';
import { supabase } from 'apis/supabaseClient';


const Details: React.FC = () => {
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [exercise, setExercise] = useState<any>(null);
    useEffect(() => {
        const getExercise = async () => {
            const{ data,error } = await supabase
            .from('exercises')
            .select()
            .eq('category', 'Shoulders')
            .single();

            if(error){
                console.log(error);
                setFetchError('There is an error');
             }
          
             if(data){
                setExercise(data);
                console.log(data);
                setFetchError(null);
             }
            

            };
            getExercise();
    }, []);


    return (
        <IonContent className="bg-gray-100 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img className="object-cover h-48 w-96 my-10" src={img} alt="logo"></img>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tab2"></IonBackButton>
                        <IonTitle>Go back</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <div className="ion-padding ">
                {fetchError && (<p>{fetchError}</p>)}
                {exercise && 
                (
                <div className="h-max">
                    <h1>{exercise.title}</h1>
                    
                        {exercise.desc}
                        
                </div>
                
                )}

            </div>
            </div>
            </div>
        </IonContent>
    );
};

export default Details;