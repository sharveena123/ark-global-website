interface WorkButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function WorkButton({ 
  onClick, 
  className = "", 
  disabled = false,
  type = "button"
}: WorkButtonProps) {
  return (
    <button 
      className={`group relative overflow-hidden rounded-full bg-blue-900 px-10 py-2.2 text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/15 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
      <span className="font-semibold text-blue-200">Send via WhatsApp</span>
    </button>
  );
}