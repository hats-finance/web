import { IPFS_PREFIX } from "../../../../constants/constants";
import "./index.scss";

interface IProps {
  item: string;
}

const IPFS_NFT_VIDEOS_COLLECTION = "QmQSgzKwJk4v867mhRqoGN1PeoeDWx5XKnJewVee2rzS42";

export default function NFTMedia({ item }: IProps) {
  return (
    <div className="nft-media-wrapper">
      <video loop autoPlay muted playsInline>
        <source src={`${IPFS_PREFIX}/${IPFS_NFT_VIDEOS_COLLECTION}/${encodeURI(item)}.mp4`} type="video/mp4" />
      </video>
      <div className="details-wrapper">
        <div>Electric Dreams Collection</div>
        <div className="item-name">{item}</div>
      </div>
    </div>
  )
}
