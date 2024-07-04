export default function Input() {
  return (
    <div className="relative">
      <input
        required
        type="text"
        name="text"
        autoComplete="off"
        className="peer rounded-2xl border-2 border-solid border-gray-800 bg-none p-4 text-base text-gray-800 transition-all valid:border-2 valid:border-blue-300 valid:outline-none focus:border-2 focus:border-blue-300 focus:outline-none "
      />
      <label
        className="pointer-events-none absolute  left-[15px] translate-y-4 text-gray-400 duration-100 ease-in-out peer-valid:-translate-y-1/2 peer-valid:bg-white peer-valid:p-1 peer-valid:text-blue-300

      peer-focus:-translate-y-1/2 peer-focus:bg-white peer-focus:p-1 peer-focus:text-blue-300
      "
      >
        First Name
      </label>
    </div>
  )
}
