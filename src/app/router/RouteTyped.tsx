import {
  Route,
  type RouteProps,
} from 'react-router'

import type { TRoutePath } from '@/shared/routes'

type TypedRoutePath = RouteProps & {
  path?: TRoutePath
}

export const RouteTyped = Route as (props: TypedRoutePath) => ReturnType<typeof Route>
