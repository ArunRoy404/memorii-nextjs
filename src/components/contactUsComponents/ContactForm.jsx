'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";
import { useContact } from "@/hooks/contact.hook";
import CommonAlert from "@/components/common/CommonAlert/CommonAlert";
import { useState } from "react";

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
    const [alert, setAlert] = useState(null);
    const { mutate: sendMessage, isPending } = useContact({ setAlert });


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


    const onSubmit = (values) => {
        setAlert(null);

        const payload = {
            first_name: values.firstName,
            last_name: values.lastName,
            email_address: values.email,
            subject: values.subject,
            message: values.message,
        };

        sendMessage(payload, {
            onSuccess: () => {
                form.reset();
            },
        });
    };



    return (
        <div className="bg-white p-8 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>

            {alert && (
                <div className="mb-6">
                    <CommonAlert alert={alert} />
                </div>
            )}

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
                                            placeholder="First Name"
                                            {...field}
                                            className="rounded-xl placeholder:text-gray-400 bg-gray-50 border-transparent focus:border-teal-500 focus:ring-teal-100 h-12"
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
                                            placeholder="Last Name"
                                            {...field}
                                            className="rounded-xl placeholder:text-gray-400 bg-gray-50 border-transparent focus:border-teal-500 focus:ring-teal-100 h-12"
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
                                        placeholder="EMAIL_ADDRESS"
                                        {...field}
                                        className="rounded-xl placeholder:text-gray-400 bg-gray-50 border-transparent focus:border-teal-500 focus:ring-teal-100 h-12"
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
                                        <SelectTrigger className="rounded-xl w-full bg-gray-50 border-transparent focus:ring-teal-100 h-12 text-gray-600">
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
                                        placeholder="Type your message here..."
                                        className="rounded-xl bg-gray-50 placeholder:text-gray-400 border-transparent focus:border-teal-500 focus:ring-teal-100 min-h-[120px] resize-none"
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
                        isLoading={isPending}
                        className="w-full py-6 rounded-full bg-[#00A99D] hover:bg-[#008f85] text-white font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        Send Message <Send size={18} />
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ContactForm;