interface CardProps {
    titulo: string
    descricao: string
    icone: React.ReactElement
}

export default function Card(props: CardProps) {
    return (
        <>
            <div className="flex justify-center items-center text-center relative max-sm:w-16 max-md:w-28 max-lg:w-44">
                <div className="flex flex-col items-center">
                    <div className="flex justify-center pb-14">
                        {props.icone}
                    </div>
                    <div className="bg-white max-sm:w-32 max-md:w-44 max-lg:w-52 w-64 h-64 rounded-xl pt-20">
                        <h2 className="max-sm:text-xl text-3xl font-semibold">{props.titulo}</h2>
                        <span>{props.descricao}</span>
                    </div>
                </div>
            </div>
        </>
    )
}