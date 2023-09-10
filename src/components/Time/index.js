import './styles.css'
import Colaborador from '../Colaborador'


const Time = (props) => {

    const corPrimaria = {borderColor: props.corPrimaria}
    const corSecundaria = {backgroundColor: props.corSecundaria}

    return(
        props.colaboradores.length > 0 &&
        <section className='time' style={corSecundaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </div>
        </section>
    )
}

export default Time