function Input (props) {
	let inputElement = null

	switch (props.proptype) {
		case 'text':
			inputElement = <input id='' name={props.name}
type='text' />
			break

		default:
			break
	}

	return inputElement
}

export default Input
