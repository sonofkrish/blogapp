import { SignIn } from "@clerk/clerk-react";

export const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <SignIn signUpUrl="/register" />
    </div>
  );
};
