import { Input } from "@client/components/molecules/Input"
import { IInputFieldProps } from "@client/components/molecules/InputField/@types"
import { View } from "dripsy"
import { Controller, FieldValues } from "react-hook-form"

export const InputField = <TFieldValues extends FieldValues>({
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
  onInputFieldBlur,
}: IInputFieldProps<TFieldValues>) => (
  <View sx={sx}>
    <Controller
      control={control}
      rules={{
        required: isRequired,
      }}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          value={value}
          onChangeText={onChange}
          onBlur={() => {
            onBlur()
            onInputFieldBlur?.()
          }}
          placeholder={placeholder}
          label={label}
          iconName={iconName}
          isRequired={isRequired}
          error={error}
          inputType={inputType}
          disabled={disabled}
        />
      )}
    />
  </View>
)
