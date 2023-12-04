
const Text = ({ title, text, color, order }) => {
  return (
    <div className={`${order} text-center h-[437px] px-6 flex flex-col place-content-around py-8 tablet:h-auto lg:px-[65px] desktop:text-left desktop:pl-[165px] desktop:py-[140px] desktop:pr-[105px]`}>
      <h2 className="font-Fraunces text-[2rem] text-Very-dark-desaturated-blue font-black tablet:text-[1.25rem] lg:text-[2.5rem] desktop:leading-tight">{title}</h2>
      <p className=" font-Barlow text-Dark-grayish-blue text-[1.125rem] leading-[1.875rem] tablet:text-[0.8em] tablet:leading-[1.5rem] lg:text-[18px]">{text}</p>
      <div className="relative">
        <button className="uppercase font-Fraunces font-black text-Very-dark-desaturated-blue lg:text-1x1">Learn More</button>
        <div className={`w-[130px] h-[10px] ${color} rounded-full absolute left-0 right-0 mx-auto bottom-0 -z-10 bg-opacity-25 desktop:mx-0 desktop:left-[-10px]`}></div>
      </div>
    </div>
  )
}

export default Text