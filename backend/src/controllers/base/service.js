module.exports = (model) => {
	return {
		create: (data) => {
			const newEntity = new model((data));
			return newEntity.save();
		},
		findAll: () =>
			model.find({}),
		findOne: (id) => model.findById(id).populate(),
		update: (id, updateData) => {
			return model.findByIdAndUpdate(id, updateData, {
				new: false
			});
		},
		delete: async (id) => {

			const doc = await model.findByIdAndRemove(id);

			if (!doc) {
				throw new Error('Not found');
			}
			return doc.delete();
		}
	}
}