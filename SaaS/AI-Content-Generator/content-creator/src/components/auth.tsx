import { SignedIn,SignedOut,UserButton,SignInButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
const Auth = () => {
  return (
    <div>
        <SignedOut>
            <SignInButton mode="modal">
                <Button>
                  Sign In
                </Button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </div>
  )
}

export default Auth