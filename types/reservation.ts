import z from 'zod'

export const ReservationSchema = z.object({
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Невірний формат дати (YYYY-MM-DD)'),
  slot_start: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Невірний формат часу (HH:MM)'),
  table_id: z.number().int().describe('ID столика'),
  guest_count: z.number().int().positive('Кількість гостей має бути більше 0'),
  user_id: z.number().int().optional().nullable(),
  phone_number: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  comments: z.string().optional().nullable()
})
export type ReservationInput = z.infer<typeof ReservationSchema>

export interface Table {
  id: number
  table_number: number
  is_available?: boolean
  capacity?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}
