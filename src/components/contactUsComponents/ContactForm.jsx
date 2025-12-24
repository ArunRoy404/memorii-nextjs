'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// --- Validation Schema ---
const formSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string({
        required_error: "Please select a subject",
    }),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
    // 1. Define form
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            subject: "General Inquiry",
            message: "",
        },
    });

    // 2. Define submit handler
    const onSubmit = (values) => {
        console.log("Form Submitted:", values);
        // Add your API call here
    };

    return (
        <div className="bg-white p-8 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* First Name */}
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-600 font-medium">First Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Jane"
                                            {...field}
                                            className="rounded-xl bg-gray-50 border-transparent focus:border-teal-500 focus:ring-teal-100 h-12"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Last Name */}
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-600 font-medium">Last Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Doe"
                                            {...field}
                                            className="rounded-xl bg-gray-50 border-transparent focus:border-teal-500 focus:ring-teal-100 h-12"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Email Address */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-600 font-medium">Email Address</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="jane@example.com"
                                        {...field}
                                        className="rounded-xl bg-gray-50 border-transparent focus:border-teal-500 focus:ring-teal-100 h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Subject Select */}
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-600 font-medium">Subject</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="rounded-xl bg-gray-50 border-transparent focus:ring-teal-100 h-12 text-gray-600">
                                            <SelectValue placeholder="Select a subject" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="rounded-xl">
                                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                                        <SelectItem value="Support">Support with a Template</SelectItem>
                                        <SelectItem value="Pricing">Pricing Question</SelectItem>
                                        <SelectItem value="Partnership">Partnership</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Message Textarea */}
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-600 font-medium">Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="How can we help you today?"
                                        className="rounded-xl bg-gray-50 border-transparent focus:border-teal-500 focus:ring-teal-100 min-h-[120px] resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full py-6 rounded-full bg-[#00A99D] hover:bg-[#008f85] text-white font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95"
                    >
                        Send Message <Send size={18} />
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ContactForm;