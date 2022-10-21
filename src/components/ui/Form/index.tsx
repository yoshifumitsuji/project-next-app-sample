import React, { useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Toggle } from 'src/components/ui/Input/Toggle'

import styles from './index.module.scss'

type Props = {
  onSubmit: () => void
  onError: () => void
}

export const Form = (props: Props) => {
  const { control, getValues, setValue, handleSubmit } = useForm({
    defaultValues: {
      toggle: false,
    },
  })

  const handleChangeToggle = useCallback(() => {
    const value = getValues('toggle')
    setValue('toggle', !value)
  }, [getValues, setValue])

  return (
    <form className={styles.form} onSubmit={handleSubmit(props.onSubmit, props.onError)}>
      <Controller
        control={control}
        name='toggle'
        render={({ field: { value, ref } }) => <Toggle active={value} ref={ref} onChange={handleChangeToggle} />}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}
