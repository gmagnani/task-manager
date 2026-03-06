const InputLabel = ({ children, ...props }) => {
    return(
        <label
        className=" text-sm font-semibold text-darkBlue text-left"
        htmlFor={props.id}
      >
        {children}
      </label>
    )
}

export default InputLabel