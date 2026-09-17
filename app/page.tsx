import { redirect } from 'next/navigation'

export default function Page() {
  redirect('/ather-ui/index.html')
}

export const metadata = {
  title: 'Athar — Le bénévolat pour une Algérie solidaire',
  description: 'La plateforme qui connecte les bénévoles et les associations en Algérie.',
}
