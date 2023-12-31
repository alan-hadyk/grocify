import { Input } from "@client/components/molecules/Input"
import { IInputFieldProps } from "@client/components/molecules/InputField/@types"
import { View } from "dripsy"
import { Controller } from "react-hook-form"

export const InputField: React.FC<IInputFieldProps> = ({
  control,
  error,
  name,
  label,
  placeholder,
  isRequired = false,
  iconName,
  sx,
  inputType,
  disabled,
}) => {
  return (
    <View sx={sx}>
      <Controller
        control={control}
        rules={{
          required: isRequired,
        }}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => {
          console.log({ value })

          return (
            <Input
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
              label={label}
              iconName={iconName}
              isRequired={isRequired}
              error={error}
              inputType={inputType}
              disabled={disabled}
            />
          )
        }}
      />
    </View>
  )
}
