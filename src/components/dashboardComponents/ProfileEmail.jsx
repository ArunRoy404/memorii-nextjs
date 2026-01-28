import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Dialog,
    DialogContent,
    DialogClose,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'

export default function ProfileEmail({ email }) {
    const [isEditing, setIsEditing] = useState(false)
    const [tempEmail, setTempEmail] = useState(email)
    const [step, setStep] = useState(null) // 'current-otp', 'new-otp'
    const [timer, setTimer] = useState(60)

    useEffect(() => {
        let interval
        if (step && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [step, timer])

    const handleEdit = () => {
        setIsEditing(true)
    }

    const onSubmitNewEmail = () => {
        setStep('current-otp')
        setTimer(60)
    }

    const handleContinueCurrentOtp = () => {
        setStep('new-otp')
        setTimer(60)
    }

    const handleFinalSubmit = () => {
        setStep(null)
        setIsEditing(false)
    }

    return (
        <div className="border-b pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
            <div className="flex flex-col md:flex-row gap-3">
                <Input
                    value={isEditing ? tempEmail : email}
                    onChange={(e) => setTempEmail(e.target.value)}
                    className="flex-1 h-8 bg-white border-gray-200"
                    disabled={!isEditing}
                />
                {!isEditing ? (
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-full md:w-auto h-8 px-6 text-gray-600 font-medium hover:bg-gray-50 border-gray-200"
                        onClick={handleEdit}
                    >
                        Edit
                    </Button>
                ) : (
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full md:w-auto h-8 px-4 flex-1"
                            onClick={() => {
                                setIsEditing(false)
                                setTempEmail(email)
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            size="sm"
                            className="w-full md:w-auto h-8 px-6 bg-primary hover:bg-primary/90 text-white flex-1"
                            onClick={onSubmitNewEmail}
                        >
                            Update
                        </Button>
                    </div>
                )}
            </div>

            {/* Step 1: Current Email OTP Dialogue */}
            <Dialog open={step === 'current-otp'} onOpenChange={(open) => !open && setStep(null)}>
                <DialogContent className="w-[95%] sm:max-w-[550px] p-6 md:p-12 gap-0 border-0 rounded-2xl md:rounded-[32px] overflow-hidden">
                    <DialogClose className="absolute right-4 top-4 md:right-6 md:top-6 p-2 rounded-full bg-gray-600/10 hover:bg-gray-600/20 text-gray-600 transition-colors">
                        <X className="h-4 w-4 md:h-5 md:w-5" strokeWidth={3} />
                    </DialogClose>

                    <div className="space-y-4 md:space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                                We&apos;ve sent you a code
                            </h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-[450px]">
                                Before you make changes to your account, you&apos;ll need to enter the code we&apos;ve sent to <span className="text-gray-900 font-medium">{email}</span>.
                            </p>
                        </div>

                        <div className="pt-2 md:pt-4 space-y-4 md:space-y-6">
                            <Input
                                placeholder="Enter code"
                                className="h-12 md:h-16 text-lg md:text-xl px-4 md:px-6 rounded-xl md:rounded-2xl border-2 border-primary/40 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-400"
                            />

                            <Button
                                className="w-full h-12 md:h-16 text-lg md:text-xl font-bold rounded-xl md:rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-none transition-all active:scale-[0.98]"
                                onClick={handleContinueCurrentOtp}
                            >
                                Continue
                            </Button>

                            <p className="text-sm md:text-lg text-gray-500 font-medium text-center md:text-left">
                                Didn&apos;t get the code? Resend in {timer} seconds
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Step 2: New Email OTP Dialogue */}
            <Dialog open={step === 'new-otp'} onOpenChange={(open) => !open && setStep(null)}>
                <DialogContent className="w-[95%] sm:max-w-[550px] p-6 md:p-12 gap-0 border-0 rounded-2xl md:rounded-[32px] overflow-hidden">
                    <DialogClose className="absolute right-4 top-4 md:right-6 md:top-6 p-2 rounded-full bg-gray-600/10 hover:bg-gray-600/20 text-gray-600 transition-colors">
                        <X className="h-4 w-4 md:h-5 md:w-5" strokeWidth={3} />
                    </DialogClose>

                    <div className="space-y-4 md:space-y-6">
                        <div className="space-y-3 md:space-y-4">
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                                Confirm email change
                            </h2>

                            <div className="bg-[#FFFBEC] border border-[#FFFBEC] rounded-xl md:rounded-2xl p-4 md:p-6">
                                <p className="text-[#A78B4A] text-sm md:text-xl leading-relaxed font-normal">
                                    Changing this email address will disconnect the google account you use to log in to Memorii and you&apos;ll need to use your new email to log in instead.
                                </p>
                            </div>

                            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-[450px]">
                                To confirm your new email as <span className="text-gray-900 font-bold">{tempEmail}</span>, please enter the code we just sent there.
                            </p>
                        </div>

                        <div className="pt-2 space-y-4 md:space-y-6">
                            <Input
                                placeholder="Enter code"
                                className="h-12 md:h-16 text-lg md:text-xl px-4 md:px-6 rounded-xl md:rounded-2xl border-2 border-primary/40 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-400"
                            />

                            <Button
                                className="w-full h-12 md:h-16 text-lg md:text-xl font-bold rounded-xl md:rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-none transition-all active:scale-[0.98]"
                                onClick={handleFinalSubmit}
                            >
                                Continue
                            </Button>

                            <p className="text-sm md:text-lg text-gray-500 font-medium text-center md:text-left">
                                Didn&apos;t get the code? Resend in {timer} seconds
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
