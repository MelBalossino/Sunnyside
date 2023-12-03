
const Text = ({ title, text, color }) => {
  return (
    <div className="text-center h-[437px] px-6 flex flex-col place-content-around py-8">
      <h2 className="font-Fraunces text-[2rem] font-black">{title}</h2>
      <p className=" font-Barlow text-Dark-grayish-blue text-[1.125rem] leading-[1.875rem]">{text}</p>
      <div className="relative">
        <button className="uppercase font-Fraunces font-black">Learn More</button>
        <div className={`w-[137px] h-[10px] ${color} rounded-full absolute left-0 right-0 mx-auto bottom-0 -z-10`}></div>
      </div>
    </div>
  )
}

export default Text