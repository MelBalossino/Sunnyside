import imgMobile from "../../assets/mobile/image-header.jpg"
import imgDesktop from "../../assets/desktop/image-header.jpg"

function Main() {
  return (
    <main>
      <picture>
        <source media="(max-width:640px)" srcSet={imgMobile} />
        <source media="(mix-width:641px)" src={imgDesktop} />
        <img src={imgMobile} alt="Background header" />
      </picture>
    </main>

  )
}

export default Main