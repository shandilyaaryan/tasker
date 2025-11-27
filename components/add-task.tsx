"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
export const addTastSchema = z.object({
  title: z.string().min(1, "Title can't be empty"),
  description: z.string().optional(),
  date: z.date().optional(),
});

export const AddTask = () => {
  const form = useForm<z.infer<typeof addTastSchema>>();
  return (
    <Form control={form.control}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <FormField control={form.control} name="title" render={({ field }) => (
            <FormItem>
                <FormLabel>
                    Title
                </FormLabel>
                <FormControl>
                    <Input placeholder="Title" {...field} />
                </FormControl>
            </FormItem>
  )} />
      </form>
    </Form>
  );
};
