import InputLabel from './InputLabel'

const Input = ({ label, error, ...props }) => {
  return (
    <div className="space-y-1 flex flex-col">
      <InputLabel id={props.id}>{label}</InputLabel>
      <input
        className=" outline-textGray px-4 py-3 border border-solid border-[#ececec] rounded-lg placeholder:text-sm placeholder:text-primary "
        {...props}
      />
      {error && <p className="text-red-500 text-sm text-left">{error}</p>}
    </div>
  )
}

export default Input
