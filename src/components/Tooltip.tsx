export default function Tooltip() {
  return (
    <>
      <div className="group/container relative cursor-pointer rounded-[8px] bg-red-500 px-3 py-7 text-[17px] text-white transition-all duration-200 hover:bg-gray-600 hover:text-white hover:shadow-xl">
        <span
          className="pointer-events-none invisible absolute -top-full left-1/2 rounded-[12px] bg-red-500 px-2
          py-4
        opacity-0 shadow-md transition-all
        duration-300 before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-x-8 before:border-t-8 before:border-solid before:border-x-transparent
        before:border-y-red-300 before:content-['']
        group-hover/container:pointer-events-auto group-hover/container:visible group-hover/container:top-[-120%] group-hover/container:opacity-100
        "
        >
          Uiverse.io
        </span>
        <span className="">Tooltip</span>
      </div>
    </>
  )
}
