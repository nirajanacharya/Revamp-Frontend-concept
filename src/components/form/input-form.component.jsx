import { useController } from "react-hook-form";

export const TextInputField = ({ control, name, type = "text", rules, errMsg }) => {
  const { field } = useController({
    control,
    name,
    rules,
  });

  return (
    <>
      <input
        {...field}
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
      />
      {errMsg && <p className="text-red-500 text-sm mt-1">{errMsg.message}</p>}
    </>
  );
};
