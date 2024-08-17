import Logo from "./Logo";

export default function Header() {
    return (
        <header className="flex font-['Quicksand'] justify-around items-center py-4">
            <Logo />
            <ul className="flex gap-4">
                <li><a href="#inicio">Início</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#cursos">Cursos</a></li>
                <li><a href="#certificacoes">Certificações</a></li>
                <li><a href="#redessociais">Redes Sociais</a></li>
            </ul>
        </header>
    )
}