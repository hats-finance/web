import { useTranslation } from "react-i18next";
import { HATS_NFT_FORM } from "../../constants/constants";
import './index.scss';


export default function NFT() {
  const { t } = useTranslation();

  return (
    <div className="nft-wrapper">
      <div className="info-wrapper">
        <section>
          <div className="title">{t("NFT vision")}</div>
          <div>{t("NFT vision explained")}</div>
        </section>
        <section>
          <div className="title">{t("Call for artists")}</div>
          <div>{t("Call for artists explained")}</div>
        </section>
      </div>
      <iframe src={HATS_NFT_FORM} title="Hats NFT form" />
    </div>
  )
}
