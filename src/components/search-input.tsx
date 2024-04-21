import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "./icons";

const FormSchema = z.object({
  city: z.string().min(1, {
    message: "City must be at least 1 character.",
  }),
});

type SearchInput = {
  loading: boolean;
  onSearch: (city: string) => void;
};

export function SearchInput({ loading, onSearch }: SearchInput) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      city: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.city) {
      onSearch(data.city);
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-[112px] flex w-full space-x-2"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="relative flex-1">
              <FormControl>
                <Input
                  type="text"
                  placeholder="Search a country/city to get the weather info"
                  className="h-10 w-full rounded-[20px] border-0 bg-card/[.2] text-xs ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-card/[.5] sm:h-[60px] sm:text-base"
                  disabled={loading}
                  {...field}
                />
              </FormControl>
              <label
                htmlFor="country"
                className="absolute -top-1 left-[13px] text-[8px] text-black/[.4] dark:text-white/[.4] sm:text-[10px]"
              >
                Country
              </label>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="icon"
          className="rounded-xl sm:h-[60px] sm:w-[60px]"
          disabled={loading}
        >
          <SearchIcon className="h-6 w-6 text-white sm:h-[34px] sm:w-[34px]" />
        </Button>
      </form>
    </Form>
  );
}
