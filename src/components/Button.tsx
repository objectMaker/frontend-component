export default function Button() {
  return (
    <div>
      <button
        className="hover:text-shadow-custom flex min-h-9
        min-w-12 cursor-pointer
      items-center gap-2 rounded-lg border-none bg-gradient-to-br from-red-600 to-pink-500 px-4 py-3
      text-[18px] font-bold leading-none tracking-wider text-[#fffd] shadow-inner transition-all
      duration-75 ease-linear hover:scale-110 hover:shadow-sm active:scale-100
      active:from-red-500 active:to-pink-400 active:tracking-widest active:shadow-lg dark:from-black dark:text-white
      "
      >
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
        </svg>
        button
      </button>
    </div>
  )
}
