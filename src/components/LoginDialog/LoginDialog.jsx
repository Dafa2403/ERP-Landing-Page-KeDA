import Button from '../ui/Button/Button'
import Dialog from '../ui/Dialog/Dialog'
import Input from '../ui/Input/Input'

function LoginDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Login"
    >
      <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
        <Input label="Email" type="email" name="email" placeholder="Email" />
        <Input label="Password" type="password" name="password" placeholder="Password" />

        <Button type="submit" size="lg" className="w-full">
          Login
        </Button>
      </form>
    </Dialog>
  )
}

export default LoginDialog
