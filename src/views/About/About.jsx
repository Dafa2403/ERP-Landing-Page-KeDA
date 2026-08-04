import { Section, Typography } from '../../components'

const items = [
  'Data bisnis tersimpan rapi',
  'Proses kerja lebih cepat',
  'Laporan mudah dipantau',
]

function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <Typography variant="h2" className="text-slate-950">
          Tentang ERP Kami
        </Typography>
        <Typography variant="body" className="mt-4 text-slate-600">
          Sistem ERP ini membantu bisnis mengelola pekerjaan harian dengan lebih teratur,
          mulai dari transaksi sampai laporan.
        </Typography>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
            <p className="font-semibold text-slate-950">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default About
