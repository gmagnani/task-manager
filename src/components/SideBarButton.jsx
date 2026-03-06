const SideBarButton = ({ children, variant }) => {
    const getVariantClasses = () => {
        if(variant === 'unselected') {
            return "text-darkBlue";
        } else if(variant === 'selected') {
            return "text-primary bg-primary/15";
        }
    }
    return (
        <a href="#" className={`${getVariantClasses()} flex items-center gap-2 px-6 py-3 rounded-lg`}>{children}</a>
    )
}

export default SideBarButton;