import { ThemeSwitch } from "@/components/theme-switch";

export default function ProfilePage() {
  return (
    <div className="flex flex-col w-full justify-center items-center text-3xl font-montserrat font-medium text-default-500 min-h-screen">
      Profile Page
      <div className="my-20 text-lg items-center justify-center text-default-700 flex flex-col gap-2">
        Change the theme
        <ThemeSwitch />
      </div>
    </div>
  );
}
