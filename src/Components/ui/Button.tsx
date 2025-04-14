
interface Props {
  variant: "primary" | "secondary"
  children: React.ReactNode
  className?: string
}

function Button({ variant, children, className, ...props }: Props) {

    const baseStyles = 'px-5 py-3 rounded-full font-semibold transition-colors duration-300';
  
    const variants = {
      primary: 'bg-primary_green text-black hover:bg-secondary_green focus:ring-secondary_green',
      secondary: 'bg-black text-white hover:bg-gray-900 focus:ring-gray-900',
    };
  
    const variantStyles = variants[variant] || variants.primary;
  
    return (
      <button
        className={`${baseStyles} ${variantStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;