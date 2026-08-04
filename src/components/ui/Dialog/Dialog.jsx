import { X } from 'lucide-react'

function Dialog({ open, onClose, title, description, children }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby={description ? 'dialog-description' : undefined}
        className="relative z-10 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/20"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 id="dialog-title" className="text-xl font-bold text-slate-950">
              {title}
            </h2>
            {description && (
              <p id="dialog-description" className="mt-1 text-sm leading-6 text-slate-500">
                {description}
              </p>
            )}
          </div>

          <button
            type="button"
            aria-label="Close dialog"
            className="shrink-0 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}

export default Dialog
