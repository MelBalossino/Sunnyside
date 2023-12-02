import Image from "../Image/Image"

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
      <Image
        imgMobile={glassMobile}
        imgDesktop={glassDesktop} />
    </section>
  )
}

export default Services