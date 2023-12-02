import Image from "../Image/Image"
import Text from "../Text/Text"

import eggMobile from "../../assets/mobile/image-transform.jpg"
import eggDesktop from "../../assets/desktop/image-transform.jpg"
import glassMobile from "../../assets/mobile/image-stand-out.jpg"
import glassDesktop from "../../assets/desktop/image-stand-out.jpg"

const Services = () => {
  return (
    <section>
      <Image
        imgMobile={eggMobile}
        imgDesktop={eggDesktop} />
      <Text
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you."
        color="bg-Yellow" />
      <Image
        imgMobile={glassMobile}
        imgDesktop={glassDesktop} />
      <Text
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        color="bg-Soft-red" />
    </section>
  )
}

export default Services