/* eslint-disable tailwindcss/no-custom-classname */
export default function CircleCheckbox() {
  return (
    <div className="group relative inline-block size-[40px]">
      <input
        checked={false}
        type="checkbox"
        className="group/input absolute left-0 top-0 m-0 size-full cursor-pointer appearance-none opacity-0"
      />
      <svg viewBox="0 0 35.6 35.6">
        <circle
          className="ease fill-blue-500 transition-all duration-500 group-checked/input:fill-[#421c64]"
          cx="17.8"
          cy="17.8"
          r="17.8"
        ></circle>
        <circle
          className="group-checked/input:stroke-offset-0 stroke-offset-100 stroke-dash-100 stroke-miterlimit-10 fill-none stroke-white stroke-2 transition-all duration-500"
          cx="17.8"
          cy="17.8"
          r="14.37"
        ></circle>
        <polyline
          className="group-checked/input:stroke-offset-0 group-hover:stroke-offset-0 stroke-join-round stroke-cap-round stroke-offset-22 stroke-dash-22 fill-none stroke-white"
          points="11.78 18.12 15.55 22.23 25.17 12.87"
        ></polyline>
      </svg>
    </div>
  )
}
