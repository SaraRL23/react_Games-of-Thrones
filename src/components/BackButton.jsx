import React from 'react'
import { Link } from 'react-router-dom'
import "./BackButton.css"
import { useTranslation } from "react-i18next";

const BackButton = () => {
  const { t, i18n } = useTranslation(["translation"]);

  return (
    <div className="c-back">
        <img src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/e042365d-a1dc-4fef-ab6c-245a7c85f922.svg" alt="back" />
        <p>{t("volver")}</p>
    </div>
  )
}

export default BackButton