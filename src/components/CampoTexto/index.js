import './styles.css'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor="Nome">
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto