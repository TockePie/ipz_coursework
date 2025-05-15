import React from 'react'
import { Button } from '@ui/button'
import { Dialog, DialogContent } from '@ui/dialog'
import Link from 'next/link'

interface Props {
  open: boolean
  onClose: () => void
}

const SuccessDialog = ({ open, onClose }: Props) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="flex flex-col items-center text-center sm:max-w-md">
      <h2 className="text-lg font-semibold">Вітаємо</h2>
      <p className="text-brown/80 font-unbounded mt-2 text-sm font-light">
        Ваші дані успішно оновлено.
      </p>
      <Button className="mt-4" onClick={onClose} asChild>
        <Link href="/">На головну</Link>
      </Button>
    </DialogContent>
  </Dialog>
)

export default SuccessDialog
