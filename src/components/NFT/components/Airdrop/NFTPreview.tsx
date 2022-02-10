import { IPFS_PREFIX } from "../../../../constants/constants";
import "./index.scss";

interface IProps {
  index: string;
}

const IPFS_NFT_COLLECTION = "QmSiPFLfYwodihG94ASaiWJuQ6uLUXkz8p8kvoCTv8KraP";

export default function NFTPreview({ index }: IProps) {
  return (
    <div className="nft-preview-wrapper">
      <img src={`${IPFS_PREFIX}/${IPFS_NFT_COLLECTION}/${index}.png`} alt="nft" />
      <div className="details-wrapper">
        <div>The Crow Clan</div>
        <div>{`#${index}`}</div>
      </div>
    </div>
  )
}
