const SideBarButton = ({ children, variant }) => {
    const getVariantClasses = () => {
        if(variant === 'unselected') {
            return "text-[#35383e]";
        } else if(variant === 'selected') {
            return "text-[#00adb5] bg-[#e6f7f8]";
        }
    }
    return (
        <a href="#" className={`${getVariantClasses()} px-6 py-3 rounded-lg`}>{children}</a>
    )
}

export default SideBarButton;