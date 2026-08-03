function Dialog({ open, onClose, title, children }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <button
                type="button"
                aria-label="Close dialog"
                className="absolute inset-0 bg-slate-950/50"
                onClick={onClose}
            />

            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="dialog-title"
                className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            >
                <div className="mb-5 flex items-center justify-between gap-4">
                    <h2 id="dialog-title" className="text-xl font-bold text-slate-950">
                        {title}
                    </h2>

                    <button
                        type="button"
                        aria-label="Close dialog"
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>

                {children}
            </div>
        </div>
    )
}

export default Dialog