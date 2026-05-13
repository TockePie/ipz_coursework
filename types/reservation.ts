import z from 'zod'

export const ReservationSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
  slot_start: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format'),
  table_id: z.number().int().nonnegative(),
  guest_count: z.number().int().positive(),
  user_id: z.number().int(),
  phone_number: z
    .string()
    .regex(/^\+380\d{9}$/, 'Неправильний формат українського номера'),
  name: z.string().min(2, 'Занадто коротке ім’я'),
  comments: z.string().optional()
})
export type ReservationType = z.infer<typeof ReservationSchema>

export interface Table {
  id: number
  table_number: number
  is_available?: boolean
  capacity?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}
