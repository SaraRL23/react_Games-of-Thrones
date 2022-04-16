import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import i18n from "i18next";
// import { esp } from './es';
// import { eng } from './en';
// import LanguageDetector from "i18next-browser-languagedetector";
// import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

// I18nextBrowserLanguageDetector.init({
//   interpolation:{
//     escapeValue:false,
//   },
//   lng:'en',
//   resources:{
//     en:{
//       translation:eng,
//     },
//     es:{
//       translation:esp,
//     },
//   }
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// export default I18nextBrowserLanguageDetector