import { Button, Typography } from '../../components'
import { Analyst } from '../../assets'

function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <Typography variant="h1" className="max-w-2xl text-slate-950">
            ERP untuk bisnis Anda
          </Typography>
          <Typography variant="body" className="mt-4 max-w-xl text-slate-600">
            Kelola penjualan, stok, keuangan, dan laporan dalam satu sistem yang mudah digunakan.
          </Typography>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg">Mulai Sekarang</Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '#contact'}>
              Hubungi Kami
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <img
            src={Analyst}
            alt="Ilustrasi dashboard ERP"
            className="mx-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
