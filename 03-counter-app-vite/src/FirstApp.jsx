import PropTypes from 'prop-types'
const newMessage = {
	message: 'Hola Mundo',
	title: 'César'
}
const hiFunction = () => {
  	return "Hello world";
}
const multiplication = (a,b) => {
  	return a * b;
}
export const FirstApp = ( { title,subTitle,name } ) => {
	//Las funciones se agregan dentro de este scope si se necesita llamar después de un click o useState
	//No se pueden imprimir objetos
	return (
		<>
			<h1 data-testid='test-title'> { title } </h1>
			{/*<p>{ multiplication(5,4) }</p>*/}
			<p>{ subTitle }</p>
			<p>{ subTitle }</p>
			<p>{ name }</p>
			{/*<code>{JSON.stringify(newMessage)}</code>*/}
			<p>{name}</p>
		</>
    
	)
}

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
	// title: 'No hay título',
	subTitle: 'No hay sub título',
	name: 'César Ramírez'
}