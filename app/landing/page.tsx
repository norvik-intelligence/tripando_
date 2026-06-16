import './landing.css';
import Link from 'next/link';
export default function LandingPage(){return <main className='landing-page'><section className='landing-hero'><div className='hero-copy'><h1>Tripando</h1><p>Die Betriebsplattform für soziale Organisationen.</p><div className='hero-actions'><Link href='/app' className='landing-primary'>App öffnen</Link></div></div></section></main>}