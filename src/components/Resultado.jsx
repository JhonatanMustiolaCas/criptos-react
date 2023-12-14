import styled from "@emotion/styled";

const ContenedorResultado = styled.div`
    color: #FFF;
    font-family: Lato, sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
    /* background-color: #FFF; */
    background-image: linear-gradient(180deg, #1e3c72 10%, #2a5298 90%);
    border-radius: 15px;
    box-shadow: 1px 7px 27px -4px rgba(0,0,0,1);
    -webkit-box-shadow: 1px 7px 27px -4px rgba(0,0,0,1);
    -moz-box-shadow: 1px 7px 27px -4px rgba(0,0,0,1);
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 16px;
    margin-right: 10px;
    border-bottom: 1px solid #0d2235;
    padding: 2px;
    transition: all .2s ease;

    &:hover {
        background-color: #0d2235;
        border-color: #FFF;
    }

    span {
        font-weight: 700;
    }

`

const Precio = styled.p`
    font-size: 22px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({ cotizacion }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion;

    return (
        <ContenedorResultado>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </ContenedorResultado>
    )
}

export default Resultado