import { useState } from 'react'

export default function SquareCheckbox() {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <label className="container relative block cursor-pointer select-none text-[20px]">
        <input
          checked={checked}
          onClick={() => {
            setChecked(!checked)
          }}
          type="checkbox"
          className="peer/input hidden"
        />
        <div
          className="
          size-4
          rotate-0
          rounded-md
          after:absolute
          after:left-0
          after:top-0
          after:size-4
          after:rounded
          after:border-[0.1em] after:border-solid after:border-black
          after:transition-all after:duration-100 after:content-[''] peer-checked/input:bg-[#2196f3]
          peer-checked/input:after:left-[0.25em]
          peer-checked/input:after:top-[0.15em]
          peer-checked/input:after:block
          peer-checked/input:after:h-2
          peer-checked/input:after:w-1
          peer-checked/input:after:rotate-45
          peer-checked/input:after:border-b-[0.15em]
          peer-checked/input:after:border-r-[0.15em]
          peer-checked/input:after:border-b-white
          peer-checked/input:after:border-l-transparent
          peer-checked/input:after:border-r-white
          peer-checked/input:after:border-t-transparent
        "
        ></div>
      </label>
    </>
  )
}
