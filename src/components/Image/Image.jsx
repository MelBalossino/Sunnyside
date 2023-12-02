
const Image = ({ imgMobile, imgDesktop }) => {
  return (
    <picture>
      <source media="(max-width:639px)" srcSet={imgMobile} />
      <source media="(min-width:640px)" srcSet={imgDesktop} />
      <img src={imgMobile} alt="Service image" />
    </picture>
  )
}

export default Image