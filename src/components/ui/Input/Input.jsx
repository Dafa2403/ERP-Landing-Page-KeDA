function Input({
    label,
    error,
    helperText,
    id,
    className = '',
    ...props
}) {
    const inputId = id || props.name

    return (
        <div className="space-y-2">
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium text-slate-700"
                >
                    {label}
                </label>
            )}

            <input
                id={inputId}
                className={[
                    'h-11 w-full rounded-lg border bg-white px-4 text-sm text-slate-900 shadow-sm transition-colors',
                    'placeholder:text-slate-400',
                    'focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20',
                    'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500',
                    error ? 'border-red-400' : 'border-slate-200',
                    className,
                ].join(' ')}
                {...props}
            />

            {error && (
                <p className="text-sm text-red-600">
                    {error}
                </p>
            )}

            {!error && helperText && (
                <p className="text-sm text-slate-500">
                    {helperText}
                </p>
            )}
        </div>
    )
}

export default Input