import certificado2 from '../assest/certificado2.png'
import certificado3 from '../assest/certificado3.png'
import certificado4 from '../assest/certificado4.png'
import certificado1 from '../assest/certificado1.png';

export const  Certificacao = () => {
    return(
        <>
            <div id="containerCertificacao" className="bg-violet-900 h-[100%]">
                <h2 className="text-4xl mx-10 font-bold text-white">
                    Certicações
                </h2>
                <div className="items-center bg-yellow-500 w-60 h-0.5"></div>
                <section className='max-w-[800px] mx-auto'>
                  

                   <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-5'>
                   <p className="col-span-2 text-white flex justify-end">
                        Esse é só o começo!
                    </p>
                    <img className='w-full ' src={certificado1} alt="" />
                    <img className='w-full ' src={certificado2} alt="" />
                    <img className='w-full ' src={certificado3} alt="" />
                    <img className='w-full ' src={certificado4} alt="" />
                   </div>

                   <div className='text-center'>
                        <button className='px-[60px] text-3xl rounded-2xl w-[450px] h-[80px] bg-yellow-500 '>
                            Clique aqui
                        </button>
                        <p className='py-5 text-white text-xl'>para acompanhar meu desenvolvimento e minhas conquiustas!</p>
                   </div>
                </section>
            </div>
        </>
    )
}