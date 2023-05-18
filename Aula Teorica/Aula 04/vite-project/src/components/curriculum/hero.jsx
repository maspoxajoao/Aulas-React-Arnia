import imagem from "../../assets/imagens";

export default function Hero(){
    return (
        <div className="hero">
            <div className="image">
                <img src={imagem.perfil} alt="perfil" />
            </div>
            <div className="info">
                <h1>Liam Dempsey</h1>
                <h2>Professional Photographer</h2>
            </div>
        </div>
    )
}

