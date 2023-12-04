import imgMobile from "../../assets/mobile/image-header.jpg"
import DesktopImg from "../../assets/desktop/image-header.jpg"
import arrow from "../../assets/icon-arrow-down.svg"

function Main() {
  return (
    <section>
      <picture>
        <source media="(max-width:640px)" srcSet={imgMobile} />
        <source media="(min-width:641px)" srcSet={DesktopImg} />
        <img src={imgMobile} alt="Background header" />
      </picture>
      <p className="absolute font-Fraunces text-[40px] uppercase tracking-[6.25px] text-white text-center w-[327px] top-[144px] left-0 right-0 mx-auto
      sm:w-[600px] sm:top-[100px] lg:top-[120px] xl:top-[170px] desktop:top-[200px] desktop:text-5xl">We are creatives</p>
      <img className="absolute top-[294px] left-0 right-0 mx-auto sm:top-[180px] lg:top-[220px] xl:top-[300px] desktop:top-[350px]" src={arrow} alt="Arrow image" />
    </section>
  )
}

export default Main