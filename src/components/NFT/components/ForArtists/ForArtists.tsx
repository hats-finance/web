import { useTranslation } from "react-i18next";
import { HATS_NFT_FORM } from "../../../../constants/constants";
import './index.scss';

export default function ForArtists() {
  const { t } = useTranslation();

  return (
    <div className="for-artists-wrapper">
      <div className="info-wrapper">
        <section>
          <div className="title">{t("NFTRouth.ForArtists.NFT vision")}</div>
          <div>{t("NFTRouth.ForArtists.NFT vision explained")}</div>
        </section>
        <section>
          <div className="title">{t("NFTRouth.ForArtists.Our Vision")}</div>
          <div>{t("NFTRouth.ForArtists.Our Vision explained")}</div>
        </section>
        <section>
          <div className="title">{t("NFTRouth.ForArtists.Call for artists")}</div>
          <div>{t("NFTRouth.ForArtists.Call for artists explained")}</div>
        </section>
      </div>
      <iframe src={HATS_NFT_FORM} title="Hats NFT form" />
    </div>
  )
}
