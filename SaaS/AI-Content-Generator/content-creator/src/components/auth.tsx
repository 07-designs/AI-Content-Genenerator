import { SignedIn,SignedOut,UserButton,SignInButton } from "@clerk/nextjs"
const Auth = () => {
  return (
    <div>
        <SignedOut>
            <SignInButton mode="modal">
                <button className="btn btn-primary">Sign In</button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </div>
  )
}

export default Auth