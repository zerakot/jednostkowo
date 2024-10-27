export const getInitialDataset = (controllers) => {
	const initialDataset = controllers.reduce((res, controller) => {
		if (controller?.ignore) return res;
		if (controller.element === 'select') {
			res[controller.id] = controller.options.find((option) => option.default)?.name;
		} else {
			res[controller.id] = controller.defaultValue || '';
		}
		return res;
	}, {});

	return initialDataset;
};
