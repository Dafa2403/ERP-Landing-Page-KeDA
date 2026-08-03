
const variants = {
    primary: 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    outline: 'border border-indigo-200 bg-white text-indigo-600 hover:bg-indigo-50'
}

const size = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-5 text-sm',
    lg: 'h-12 px-6 text-base'
}

function Button({ children, variant = 'prima', size = 'md', type = 'button', className = '', ...props }) {
    const buttonVariant = variants[variant] || variants.primary;
    const buttonSize = size[size] || size.md;

    return (
        <button 
            type={type}
            className={[
                'inline-flex items-center justify-center rounded-lg font-semibold transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-60',
                buttonVariant,
                buttonSize,
                className,
            ].join(' ')}
        >
            {children}
        </button>
    )
}

export default Button