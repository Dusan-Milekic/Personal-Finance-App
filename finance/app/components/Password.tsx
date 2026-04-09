import { Dispatch, SetStateAction } from "react";

type Props = {
  text: string;
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
};

export default function Password({ text, showPassword, setShowPassword }: Props) {
  return (
    <div className="flex flex-col relative">
      <label className="text-[#696868] font-bold">{text}</label>

      <input
        type={showPassword ? "text" : "password"}
        name="password"
        className="w-full indent-5 h-11 rounded-lg border border-stone-400"
      />

      <img
        src="/assets/images/icon-show-password.svg"
        className="w-5 absolute cursor-pointer bottom-4 right-5"
        onClick={() => setShowPassword(prev => !prev)}
      />
    </div>
  );
}