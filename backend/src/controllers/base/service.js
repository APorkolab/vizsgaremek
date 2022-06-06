module.exports = (model) => {
	return {
		findAll: () =>
			model.findAll({}),
	};
};