export interface ActionState<Schema> {
  success: boolean
  errorMessage?: string
  zodErrors?:
    | {
        [K in keyof Schema]?: string[]
      }
    | null
}
