import React from 'react';
import ListLanguage from '../components/ListLanguage';
import Navbar from '../components/Navbar';
import "./homepage.css";
import { t } from 'i18next'
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
    const { t, i18n } = useTranslation(["translation"]);
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
