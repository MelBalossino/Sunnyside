import imgMobile from "../../assets/mobile/image-header.jpg"
import DesktopImg from "../../assets/desktop/image-header.jpg"

function Main() {
  return (
    <main>
      <picture>
        <source media="(max-width:640px)" srcSet={imgMobile} />
        <source media="(min-width:641px)" srcSet={DesktopImg} />
        <img src={imgMobile} alt="Background header" />
      </picture>
    </main>
  )
}

export default Main