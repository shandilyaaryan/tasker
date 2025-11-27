"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Dialog, DialogHeader } from "./ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { PlusIcon } from "lucide-react";
export const addTastSchema = z.object({
  title: z.string().min(1, "Title can't be empty"),
  description: z.string().optional(),
  date: z.date().optional(),
});

export const AddTask = () => {
  const [open, setOpen] = useState(true);
  const form = useForm<z.infer<typeof addTastSchema>>();
  return (       
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <PlusIcon size={4}/>Add a Todo
                </Button>
            </DialogTrigger>
            <DialogHeader>
                Create a New TODO
            </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => console.log(data))}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Title" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </Dialog>
  );
};
