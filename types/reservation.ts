interface Table {
  id: number
  table_number: number
  is_available?: boolean
  capacity?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

interface AvailableSlot {
  date: string
  slots: Slots[]
}

type Slots = {
  slot_start: string
  slot_end: string
  is_available_for_booking: boolean
}

interface AvailableTable {
  table_id: number
  table_number: number
  capacity: number
  is_available: boolean
  reason_code: string
  reason_message: string
}

export type { AvailableSlot, AvailableTable, Slots, Table }
