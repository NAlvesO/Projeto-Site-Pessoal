import certificado2 from '../assest/certificado2.png'
import certificado3 from '../assest/certificado3.png'
import certificado4 from '../assest/certificado4.png'
import certificado1 from '../assest/certificado1.png';

export const  Certificacao = () => {
    return(
        <div>
            <div id="containerCertificacao" className="bg-violet-900 h-[100%]">
                <h1 className="text-4xl mx-10 font-bold text-white">
                    Certicações
                </h1>
                <section className='max-w-[800px] mx-auto'>
                  

                   <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                   <p className="col-span-2 text-white flex justify-end">
                        Esse é só o começo!
                    </p>
                    <img className='w-full ' src={certificado1} alt="" />
                    <img className='w-full ' src={certificado2} alt="" />
                    <img className='w-full ' src={certificado3} alt="" />
                    <img className='w-full ' src={certificado4} alt="" />
                   </div>
                </section>
            </div>
        </div>
    )
}