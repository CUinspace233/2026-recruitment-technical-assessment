type ToggleIconButtonProps = {
  icon: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
  title?: string;
};

export function ToggleIconButton({
  icon,
  isActive,
  onClick,
  className,
  title,
}: ToggleIconButtonProps) {
  const base =
    "material-icons border border-orange-500 rounded-sm p-1 cursor-pointer transition-colors select-none";
  const active = "bg-orange-500 text-white";
  const inactive = "bg-transparent text-orange-500";

  return (
    <button
      type="button"
      aria-pressed={isActive}
      title={title ?? icon}
      onClick={onClick}
      className={`${base} ${isActive ? active : inactive} ${className ?? ""}`}
    >
      {icon}
    </button>
  );
}


