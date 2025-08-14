function Form() {

    return (

        <div className="formulario">
            <form action="https://formsubmit.co/1f2127a37680a9ad9c1c547fbe7c9168" method="POST">
                <input type="text" name="nombre" placeholder="Nombre"/>
                <input type="text" name="email" placeholder="Email"/>
                <input type="text" name="asunto" placeholder="Asunto"/>
                <textarea name="mensaje" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>

    )
}

export default Form
