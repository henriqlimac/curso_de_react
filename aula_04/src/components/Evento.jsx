export default function Evento({palavra}){

    function meuEvento(){
        document.getElementById("hello").innerHTML = (`${palavra}`)
    }

    setTimeout(Evento, 3);

    return(
        <div>
            <p>Clique no botão para disparar um evento.</p>
            <button onClick={meuEvento}>ATIVAR!</button>
            <div id="hello" className="invisivel"></div>
        </div>
    )

}