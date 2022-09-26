import { useState } from "react"

export default function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(nome)
        console.log(senha)
        console.log("CADASTRO CONCLUIDO!")
    }

    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()

    return(
        <div>
            <h1>MEU CADASTRO</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">NOME: </label>
                    <input 
                        type="text" 
                        id="nome"
                        name="nome" 
                        placeholder="Digite seu nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">SENHA: </label>
                    <input 
                        type="password" 
                        id="senha"
                        name="senha" 
                        placeholder="Digite sua senha"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="ENVIAR"/>
                </div>
            </form>
            <div id="nome"/>
            <div id="senha"/>
        </div>
    )

}