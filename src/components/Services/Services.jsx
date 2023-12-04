import Image from "../Image/Image"
import Text from "../Text/Text"
import ImageText from "../ImageText/ImageText"

import eggMobile from "../../assets/mobile/image-transform.jpg"
import eggDesktop from "../../assets/desktop/image-transform.jpg"
import glassMobile from "../../assets/mobile/image-stand-out.jpg"
import glassDesktop from "../../assets/desktop/image-stand-out.jpg"
import graphicDesignMobile from "../../assets/mobile/image-graphic-design.jpg"
import graphicDesignDesktop from "../../assets/desktop/image-graphic-design.jpg"
import photographyMobile from "../../assets/mobile/image-photography.jpg"
import photographyDesktop from "../../assets/desktop/image-photography.jpg"

const Services = () => {
  return (
    <section className="tablet:grid tablet:grid-cols-2">
      <Image
        order="order-2"
        imgMobile={eggMobile}
        imgDesktop={eggDesktop} />
      <Text
        order="order-1"
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow fast. 
        Engage your clients through compelling visuals that do most of the marketing for you."
        color="bg-Yellow" />
      <Image
        order="order-3"
        imgMobile={glassMobile}
        imgDesktop={glassDesktop} />
      <Text
        order="order-4"
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        color="bg-Soft-red" />
      <ImageText
        order="order-5"
        imgMobile={graphicDesignMobile}
        imgDesktop={graphicDesignDesktop}
        title="Graphic design"
        text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />
      <ImageText
        order="order-6"
        imgMobile={photographyMobile}
        imgDesktop={photographyDesktop}
        title="Photography"
        text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
    </section>
  )
}

export default Services