import { Button } from '@/components/ui/button'
import { config } from '@/config'
import { Mail, SendHorizonal } from 'lucide-react'
import { getContactLink } from './util/get-contact-link'

export default function CallToAction() {

    const handleSubmit = (formData: FormData) => {
        const email = formData.get('email')
        const subject = " new contact from " + email
        const message = "I am interested in your services"
        const link = getContactLink(subject as string, message as string)
        window.open(link, '_blank')
    }
    return (
        <section className="py-16 md:py-32" id="contact">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl"> {config.contact.title}</h2>
                    <p className="mt-4 max-w-xl mx-auto"> {config.contact.subtitle}</p>

                    <form action={handleSubmit} className="mx-auto mt-10 max-w-sm lg:mt-12">
                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                            <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                            <input placeholder="Your mail address" className="h-14 w-full bg-transparent pl-12 focus:outline-none" type="email" />

                            <div className="md:pr-1.5 lg:pr-0">
                                <Button aria-label="submit" className="rounded-(--radius)">
                                    <span className="hidden md:block">Get Started</span>
                                    <SendHorizonal className="relative mx-auto size-5 md:hidden" strokeWidth={2} />
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
