export function toggle(flag) {
	return {
		type: 'MOBILE_MENU_TOGGLE',
		payload: !flag
	};
}

export function open() {
	return {
		type: 'MOBILE_MENU_OPEN'
	};
}

export function close() {
	return {
		type: 'MOBILE_MENU_CLOSE'
	};
}