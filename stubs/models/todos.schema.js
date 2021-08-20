const mongoose = require('mongoose');

const TITLE_MAX_LENGTH = 30;
const DESCRIPTION_MAX_LENGTH = 120;

const TodoModelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: [TITLE_MAX_LENGTH, `Max length ${TITLE_MAX_LENGTH}`],
      required: [true, 'Required'],
    },
    description: {
      type: String,
      maxLength: [DESCRIPTION_MAX_LENGTH, `Max length ${DESCRIPTION_MAX_LENGTH}`],
      required: [true, 'Required'],
    },
    priority: {
      type: String,
      enum: ['critical', 'urgent', 'common'],
      required: [true, 'Required'],
    },
    done: {
      type: Boolean,
      required: true,
    },
    date: {
      type: String,
      required: [true, 'Required'],
      validate: {
        validator: value => /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value),
        message: `wrong format, should be YYYY-MM-DD`,
      },
    },
  },
  {
    versionKey: false,
  }
);

module.exports = { TodoModelSchema };
