import "./Home.css"

export const Home = () => {
    return(
        <>
            <div className="div-home">
                <h1>
                    Estatísticas da colheita do pinhão
                </h1>
            
                <p>Esta pagina dá uma visão geral do colheita.</p>
                <p>Os dados apresentados são:</p>
                <p>A contagem de árvores,</p>
                <p>O diametro da ávore,</p>
                <p>A frequência de vibração aplicada,</p>
                <p>O data e a hora da deteção</p>
                <p>E o estado da operação</p>                
            </div>  
        </>              
    );
}