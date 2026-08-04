import { Button, Section, Typography } from '../../components'

function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <Typography variant="h2" className="text-slate-950">
          Contact
        </Typography>
        <Typography variant="body" className="mt-4 text-slate-600">
          Tertarik menggunakan ERP? Hubungi kami untuk konsultasi.
        </Typography>
      </div>

      <form className="mx-auto mt-10 max-w-xl space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <input
          type="text"
          placeholder="Nama"
          className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-indigo-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-indigo-500"
        />
        <textarea
          rows="4"
          placeholder="Pesan"
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
        />
        <Button type="submit" className="w-full">
          Kirim
        </Button>
      </form>
    </Section>
  )
}

export default Contact
