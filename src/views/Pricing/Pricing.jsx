import { Button, Section, Typography } from '../../components'

const plans = [
  ['Starter', 'Rp499rb', 'Untuk bisnis kecil'],
  ['Business', 'Rp1,2jt', 'Untuk tim berkembang'],
  ['Enterprise', 'Custom', 'Untuk kebutuhan khusus'],
]

function Pricing() {
  return (
    <Section id="pricing" className="bg-slate-50">
      <div className="mx-auto max-w-3xl text-center">
        <Typography variant="h2" className="text-slate-950">
          Pricing
        </Typography>
        <Typography variant="body" className="mt-4 text-slate-600">
          Pilih paket sesuai kebutuhan bisnis Anda.
        </Typography>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {plans.map(([name, price, description]) => (
          <div key={name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <Typography variant="h3" className="text-slate-950">
              {name}
            </Typography>
            <p className="mt-4 text-3xl font-bold text-slate-950">{price}</p>
            <p className="mt-2 text-sm text-slate-500">{description}</p>
            <Button variant="outline" className="mt-6 w-full">
              Pilih Paket
            </Button>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Pricing
