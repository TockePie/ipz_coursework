import validator from 'validator'

const LOGIN_INPUTS = [
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

export default LOGIN_INPUTS
