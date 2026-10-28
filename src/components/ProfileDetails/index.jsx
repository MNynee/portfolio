
const ProfileDetail = ({ title, text }) => {
  return (
    <li className="w-full py-2 xl:py-4 border-t-1 border-divider flex flex-col justify-center items-start xl:items-center gap-1">
        <span className="text-secondary-text font-regular xl:font-semibold text-[9px] xl:text-[13px]">{title}</span>
        <p className="font-medium text-[13px] xl:text-[18px]">{text}</p>
    </li>
  )
}

export default ProfileDetail