import { api } from './instance'

interface PasswordReset {
  first_name: string
  last_name: string
  phone_number: string
  old_password?: string
  new_password?: string
  new_password_repeat?: string
}

const passwordReset = async (props: PasswordReset) => {
  const {
    first_name,
    last_name,
    phone_number,
    old_password,
    new_password,
    new_password_repeat
  } = props

  const { data } = await api.post('/users/passwordresetclassic', {
    first_name,
    last_name,
    phone_number,
    old_password,
    new_password,
    new_password_repeat
  })

  return data
}

export { type PasswordReset, passwordReset }
