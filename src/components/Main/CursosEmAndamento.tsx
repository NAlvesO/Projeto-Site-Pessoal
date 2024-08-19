export default function CursosEmAndamento() {
    return (
        <div className="pt-10 pb-10">
            <div className="flex items-center flex-col">
                <h3 className="pb-4 pt-4 text-2xl font-semibold">Cursos em Andamento</h3>
                <div className="items-center bg-yellow-500 w-56 h-0.5"></div>
            </div>
            <div className="flex justify-center items-start m-6 relative">
                <div className="flex flex-col items-start justify-center w-64">
                    <h2 className="text-xl font-bold text-purple-900">EBAC:</h2>
                    <ul className="flex flex-col w-32 pl-4">
                        <li>UI/UX Designer</li>
                        <li>Wordpress: Desenvolvimento web do Zero</li>
                        <li>UI Designer</li>
                    </ul>
                </div>
                <div className="bg-purple-900 w-0.5 h-full absolute"></div>
                <div className="flex flex-col items-start justify-center">
                    <h2 className="text-xl font-bold text-purple-900">Udemy:</h2>
                    <ul className="flex flex-col w-32 pl-4">
                        <li>Pro-Figma</li>
                        <li>Inglês</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}