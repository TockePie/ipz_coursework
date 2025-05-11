import React from 'react'
import validator from 'validator'

import useUserStore from '@/hooks/store/use-user-store'

import InnerContainer from '../InnerContainer'
import InputField from '../InputField'

const PersonalInfoFields = () => {
  const { userInfo } = useUserStore((state) => state)

  return (
    <InnerContainer title="Персональні дані">
      <InputField
        label="Ім'я"
        type="text"
        defaultValue={userInfo?.first_name}
        name="first_name"
      />
      <InputField
        label="Прізвище"
        type="text"
        defaultValue={userInfo?.last_name}
        name="last_name"
      />
      <InputField
        label="Номер телефону"
        type="text"
        defaultValue={userInfo?.phone_number}
        name="phone_number"
        customRegister={{
          validate: (value: string) =>
            validator.isMobilePhone(value, 'uk-UA')
              ? true
              : 'Неправильний номер телефону'
        }}
      />
    </InnerContainer>
  )
}

export default PersonalInfoFields
