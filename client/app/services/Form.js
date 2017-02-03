import store from '../app.store';
import { inputIsValid } from '../components/form/text-input/actions';

export default class FormService {
	constructor(formId) {
		this.id = formId;
	}

	getValues(submit) {
		const inputs = [...document.querySelectorAll('#' + this.id + ' input')];

		if (!inputs.length) {
			return false;
		}

		const allInputs = store.getState().textInputs;

		let isValid = true;
		let data = {};

		const values = inputs.map(input => {
			const id = input.getAttribute('id');

			if (!allInputs[id].isValid) {
				isValid = false;
				store.dispatch(inputIsValid(id, isValid));
			}

			data[input.getAttribute('name')] = input.value;

			return {
				id: id,
				name: input.getAttribute('name'),
				value: input.value
			};
		});

		const results = {
			values,
			data,
			isValid
		};

		if (submit && results.isValid) {
			submit(this.id, results);
		}
	}
}