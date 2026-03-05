const InputLabel = ({ children, ...props }) => {
    return(
        <label
        className=" text-sm font-semibold text-[#35383e] text-left"
        htmlFor={props.id}
      >
        {children}
      </label>
    )
}

export default InputLabel