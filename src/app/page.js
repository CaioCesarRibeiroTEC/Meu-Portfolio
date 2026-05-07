'use client';
import Menu from '@/components/menu';
import Beginning from './inicio/page';
import Competencias from './competencia/page';
import Projetos from './projeto/page';
import Contato from './contato/page';


export default function Home() {
  return (
    <main>
      <Menu />
      <div id="inicio" className='secession'>
        <Beginning />
      </div>

      <div id="Competências" className='secession'>
        <Competencias />
      </div>

      <div id="projetos" className='secession'>
        <Projetos />
      </div>

      <div id="contato" className='secession'>
        <Contato />
      </div>
      
    </main>
  );
}