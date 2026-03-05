const Input = ({ label, ...props }) => {
  return (
    <div className="space-y-1 flex flex-col">
      <label
        className=" text-sm font-semibold text-[#35383e] text-left"
        htmlFor={props.id}
      >
        {label}
      </label>
      <input
        className=" outline-[#9a9c9f] px-4 py-3 border border-solid border-[#ececec] rounded-lg placeholder:text-sm placeholder:text-[#9a9c9f] "
        {...props}
      />
    </div>
  )
}

export default Input
