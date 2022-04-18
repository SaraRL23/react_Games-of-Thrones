import React from 'react';
import ListLanguage from '../components/ListLanguage';
import Navbar from '../components/Navbar';
import "./homepage.css";
import { t } from 'i18next'

export const HomePage = () => {
    return (
        <>
        <ListLanguage/>
              <Navbar />
        <div className='fondo'>
            
            <div className="caja">
                <h1 className="title">{t("title")}</h1>
            </div>
        </div>
        </>
    )

}
