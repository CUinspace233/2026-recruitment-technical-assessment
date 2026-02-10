type IconLabelButtonProps = {
  icon: string;
  label: string;
  onClick?: () => void;
  className?: string;
  title?: string;
};

export function IconLabelButton({
  icon,
  label,
  onClick,
  className,
  title,
}: IconLabelButtonProps) {
  const base =
    "inline-flex items-center gap-1.5 border border-orange-500 rounded-sm px-2 py-1 text-orange-500 cursor-pointer";

  return (
    <button
      type="button"
      onClick={onClick}
      title={title ?? label}
      className={`${base} ${className ?? ""}`}
    >
      <span className="material-icons text-[20px] leading-none">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
