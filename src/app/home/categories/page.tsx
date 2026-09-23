import Seo from '../../../components/Seo'

export default function Categories(){
  return (
    <section className="container mx-auto px-4 py-12">
      <Seo title="Categories - Driver Info Hub" description="Driver categories explained" />
      <h1 className="text-3xl font-semibold mb-4">Driver Categories</h1>
      <p className="text-slate-700 mb-6">Kernel-mode, user-mode, display, audio, storage, network, USB, Bluetooth and more.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg">Kernel-Mode Drivers</div>
        <div className="bg-white p-6 rounded-lg">User-Mode Drivers</div>
        <div className="bg-white p-6 rounded-lg">Display & Graphics</div>
        <div className="bg-white p-6 rounded-lg">Audio</div>
        <div className="bg-white p-6 rounded-lg">Network</div>
        <div className="bg-white p-6 rounded-lg">USB & Devices</div>
      </div>
    </section>
  )
}
