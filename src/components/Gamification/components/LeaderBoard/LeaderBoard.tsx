import { useTranslation } from "react-i18next";
import './index.scss';

export default function LeaderBoard() {
  const { t } = useTranslation();

  return (
    <div className="leader-board-wrapper">
      <span>{t("ChallengesRoute.LeaderBoard.coming-soon")}</span>
    </div>
  )
}
