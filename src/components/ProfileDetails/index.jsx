
const ProfileDetail = ({ title, text }) => {
  return (
    <li className="w-full py-4 border-t-1 border-divider flex flex-col justify-center items-center gap-1">
        <span className="text-secondary-text font-semibold text-[13px]">{title}</span>
        <p className="font-medium text-[18px]">{text}</p>
    </li>
  )
}

export default ProfileDetail