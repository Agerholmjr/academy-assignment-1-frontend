import React, { useEffect, useState } from 'react';
import { IonButton, IonCheckbox, IonContent, IonImg, } from '@ionic/react';
import img from 'static/assets/img/gym.jpeg';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { t } from 'i18next';




const StopWatch: React.FC = () => {
	const [size, setSize] = useState<SizeType>('large'); 
    const [time, setTime] = useState(0);	
		const [running, setRunning] = useState(false);

			useEffect(() => {
				let interval: string | number | NodeJS.Timeout | undefined;
				if(running){
					interval = setInterval(() => {
						setTime((prevTime) => prevTime + 10);
					},10 );
				}else if(!running){
					clearInterval(interval);
				}
				return () => clearInterval(interval);
			},[running] );
    

    return (
        <IonContent fullscreen className="fixed h-full w-full">
        <div className=' mx-auto h-15  w-auto mt-[30px]'>
            <IonImg className='mb-5 max-w-xl mx-auto' src={img}/>
          </div>
          <div className='max-w-md mx-auto flex flex-col items-center jusity-center py-8'>
					<h1 className='text-center text- text-4xl font-semibold'>{t('stopWatch.stopWatch')}</h1>
					<div className='text-xl font-semibold py-4'>
						<span>{('0' + Math.floor(time / 60000) % 60).slice(-2)}:</span>
						<span>{('0' + Math.floor(time / 1000) % 60).slice(-2)}:</span>
						<span>{('0' + Math.floor(time / 10) % 100).slice(-2)}:</span>
						</div>
            <div className='w-6/12 mx-auto flex space-x-4 flex-row justify-between'>
						{running ? (
						<Button type='primary'  size={size} style={{ backgroundColor:'grey', color:'white' }} shape={'round'} onClick={() => {setRunning(false);}}>STOP</Button>
						) : (
						<Button type='primary' size={size} shape={'round'} style={{ backgroundColor:'grey', color:'white' }} onClick={() => {setRunning(true);}}>START</Button> )}
           
					 
					 <Button type='primary' className='' size={size} shape={'round'} style={{ backgroundColor:'blue', color:'white' }} onClick={() => {setTime(0);}}>RESET</Button> 
					 </div>       
        	</div>
                
  
        </IonContent>
    );
};


export default StopWatch;