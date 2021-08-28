import { useContext } from "react";
import { LayoutContext } from "../../App";
import { ScreenSize } from "../../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import "swiper/swiper.min.css";

const NFTS_DATA = [
  {
    url: "https://ipfs.io/ipfs/QmZAuKhEivpnrhPyvhJyPGti4fGLLYQLqvUtRtvsL8wkuC/SmallSize-%20Medium-%20Electric%20Dreams.mp4"
  },
  {
    url: "https://ipfs.io/ipfs/QmZAuKhEivpnrhPyvhJyPGti4fGLLYQLqvUtRtvsL8wkuC/SmallSize-Audit%20severity%20-Aparat.mp4"
  },
  {
    url: "https://ipfs.io/ipfs/QmZAuKhEivpnrhPyvhJyPGti4fGLLYQLqvUtRtvsL8wkuC/SmallSize-Critical-Swarm%20of%20Thoughts.mp4"
  },
  {
    url: "https://ipfs.io/ipfs/QmZAuKhEivpnrhPyvhJyPGti4fGLLYQLqvUtRtvsL8wkuC/SmallSize-Low-Tech%20Sphere.mp4"
  },
  {
    url: "https://ipfs.io/ipfs/QmZAuKhEivpnrhPyvhJyPGti4fGLLYQLqvUtRtvsL8wkuC/SmallSizeHigh-%20Altair.mp4"
  }
];


export default function NFTs() {
  const { t } = useTranslation();
  const { screenSize } = useContext(LayoutContext);

  const nfts = NFTS_DATA.map((nftData, index) => {
    const nft =
      <video key={index} loop autoPlay muted width="150px">
        <source src={nftData.url} type="video/mp4" />
      </video>
    if (screenSize === ScreenSize.Desktop) {
      return nft;
    } else {
      return (
        <SwiperSlide className="swiper-slide" key={index}>
          {nft}
        </SwiperSlide>
      )
    }
  })

  return (
    <div className="nfts-wrapper">
      <div className="title">{t("NFTs")}</div>
      {screenSize === ScreenSize.Desktop ?
        <div>{nfts}</div> :
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={20}
          className="mySwiper"
        >
          {nfts}
        </Swiper>}
    </div>
  )
}
