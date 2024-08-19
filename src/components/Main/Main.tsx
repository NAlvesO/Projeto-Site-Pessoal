import Card from "./Card"
import { CardSection } from "./CardSection"
import BootsTrap from "./icons/BootsTrap"
import GitHub from "./icons/GitHub"
import VisualStudio from "./icons/VisualStudio"
import WordPress from "./icons/Wordpress"

export default function Main() {
    return (
        <CardSection>
            <div className="flex flex-col gap-3">
                <h2 className="text-3xl text-white font-semibold">Hard skills:</h2>
                <div className="items-center bg-yellow-500 w-56 h-0.5"></div>
            </div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-20 pt-10 pb-10">
                    <Card titulo={"WordPress"} descricao={"Criação de páginas e blogs lojas"} icone={<WordPress/>}></Card>
                    <Card titulo="BootsTrap" descricao="Utilização do framework para o desenvolvimento web e responsividade." icone={<BootsTrap/>}></Card>
                    <Card titulo="GitHub" descricao="Para compartilhamento e commit dos projetos." icone={<GitHub/>}></Card>
                    <Card titulo={"VsCode"} descricao={"Edições dos códigos com Visual Studio Code."} icone={<VisualStudio/>}></Card>
                </div>
            </div>
        </CardSection>
    )
}