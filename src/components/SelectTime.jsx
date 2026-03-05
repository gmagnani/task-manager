import InputLabel from './InputLabel'

const SelectTime = ({ id, label, ...props }) => {
  return (
    <div className="flex flex-col text-left gap-1">
      <InputLabel id={id}>{label}</InputLabel>
      <select
        id={id}
        name={id}
        className=" outline-[#9a9c9f] px-4 py-3 border border-solid border-[#ececec] rounded-lg text-sm text-[#9a9c9f] "
        {...props}
      >
        <option value="">Selecione</option>
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="night">Noite</option>
      </select>
    </div>
  )
}

export default SelectTime
