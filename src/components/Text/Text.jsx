
const Text = ({ title, text, color, order }) => {
  return (
    <div className={`${order} text-center h-[437px] px-6 flex flex-col place-content-around py-8 tablet:h-auto tablet:px-10`}>
      <h2 className="font-Fraunces text-[2rem] text-Very-dark-desaturated-blue font-black tablet:text-[2rem] tablet:text-left">{title}</h2>
      <p className=" font-Barlow text-Dark-grayish-blue text-[1.125rem] leading-[1.875rem] tablet:text-[0.8em] tablet:leading-[1.5rem] tablet:text-left">{text}</p>
      <div className="relative tablet:text-left">
        <button className="uppercase font-Fraunces font-black text-Very-dark-desaturated-blue">Learn More</button>
        <div className={`w-[130px] h-[10px] ${color} rounded-full absolute left-0 right-0 mx-auto bottom-0 -z-10 tablet:left-[-210px]`}></div>
      </div>
    </div>
  )
}

export default Text