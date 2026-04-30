import LoginForm from "@/app/(public)/(auth)/login/login-form";
import AppProvider from "@/components/app-provider";

export default function Login() {
  return (
    <AppProvider>
      <div className="min-h-screen flex items-center justify-center">
        <LoginForm />
      </div>
    </AppProvider>
  );
}
