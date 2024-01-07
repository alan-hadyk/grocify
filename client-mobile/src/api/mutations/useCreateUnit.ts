import { mutationKeys } from "@client/api/mutationKeys"
import { queryKeys } from "@client/api/queryKeys"
import { CreateUnitInput, Unit } from "@client/api/schema"
import { queryClient } from "@client/clients/queryClient"
import { UnitModel } from "@client/models/unitModel"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"

queryClient.setMutationDefaults(mutationKeys.units.create, {
  onSettled: (unit: Unit, error) => {
    if (unit && !error) {
      queryClient.setQueryData(queryKeys.units.detail(unit.id).queryKey, () => unit)
    }
  },
  retry: 3,
})

export const useCreateUnit = (options?: UseMutationOptions<Unit, Error, CreateUnitInput>) =>
  useMutation<Unit, Error, CreateUnitInput>({
    mutationFn: ({ name }) => UnitModel.create({ name }),
    mutationKey: mutationKeys.units.create,
    ...options,
  })
