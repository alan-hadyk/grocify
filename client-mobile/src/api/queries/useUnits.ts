import { queryKeys } from "@client/api/queryKeys"
import { Unit } from "@client/api/schema"
import { UnitModel } from "@client/models/unitModel"
import { UseQueryOptions, useQuery } from "@tanstack/react-query"

export const useUnits = (options?: UseQueryOptions<Unit[], Error, Unit[]>) =>
  useQuery<Unit[], Error, Unit[]>({
    queryFn: () => UnitModel.getAll(),
    queryKey: queryKeys.units.list().queryKey,
    ...options,
  })
