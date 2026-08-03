const variants = {
  h1: {
    tag: 'h1',
    className: 'text-4xl font-bold leading-tight text-slate-950 md:text-6xl',
  },
  h2: {
    tag: 'h2',
    className: 'text-3xl font-bold leading-tight text-slate-950 md:text-4xl',
  },
  h3: {
    tag: 'h3',
    className: 'text-xl font-semibold leading-snug text-slate-950 md:text-2xl',
  },
  body: {
    tag: 'p',
    className: 'text-base leading-7 text-slate-600',
  },
  caption: {
    tag: 'p',
    className: 'text-sm leading-6 text-slate-500',
  },
}

function Typography({ variant = 'body', children, className = '' }) {
  const selectedVariant = variants[variant] || variants.body
  const Component = selectedVariant.tag

  return (
    <Component className={[selectedVariant.className, className].filter(Boolean).join(' ')}>
      {children}
    </Component>
  )
}

export default Typography
