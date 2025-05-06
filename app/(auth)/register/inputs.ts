import validator from 'validator'

const REGISTER_INPUTS = [
  {
    name: 'first_name',
    register: {
      required: 'Це поле обов’язкове',
      minLength: {
        value: 2,
        message: 'Мінімум 2 символи'
      }
    },
    placeholder: "Ім'я",
    type: 'text'
  },
  {
    name: 'last_name',
    register: {
      required: 'Це поле обов’язкове',
      minLength: {
        value: 2,
        message: 'Мінімум 2 символи'
      }
    },
    placeholder: 'Прізвище',
    type: 'text'
  },
  {
    name: 'phone_number',
    register: {
      required: 'Це поле обов’язкове',
      minLength: {
        value: 10,
        message: 'Мінімум 10 цифр'
      },
      validate: (value: string) =>
        validator.isMobilePhone(value, 'uk-UA')
          ? true
          : 'Неправильний номер телефону'
    },
    placeholder: 'Телефон',
    type: 'text'
  },
  {
    name: 'password',
    register: {
      required: 'Це поле обов’язкове',
      minLength: {
        value: 8,
        message: 'Пароль має містити щонайменше 8 символів'
      }
    },
    placeholder: 'Пароль',
    type: 'password'
  }
]

export default REGISTER_INPUTS
