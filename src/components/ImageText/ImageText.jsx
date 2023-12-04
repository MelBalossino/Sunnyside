
const ImageText = ({ order, imgMobile, imgDesktop, title, text }) => {
  return (
    <div className={order}>
      <picture>
        <source media="(max-width:639px)" srcSet={imgMobile} />
        <source media="(min-width:640px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="Service image" />
      </picture>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default ImageText