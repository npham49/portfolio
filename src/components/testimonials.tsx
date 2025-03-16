import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { config } from '@/config'
import HeaderTitle from './util/header-title'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32" id="testimonials">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <HeaderTitle>{config.testimonials.title}</HeaderTitle>
                    <p>{config.testimonials.subtitle}</p>
                </div>

                <div className="grid gap-4 [--color-card:var(--color-muted)] *:border-none *:shadow-none sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 dark:[--color-muted:var(--color-zinc-900)]">
                    {config.testimonials.items.map((testimonial, index) => (
                        <Card key={index} className={index === 0 ? "grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2" : ""}>
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p className={index === 0 ? "text-xl font-medium" : ""}>{testimonial.quote}</p>

                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-12">
                                            <AvatarImage src={testimonial.image} alt={testimonial.name} height="400" width="400" loading="lazy" />
                                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <cite className="text-sm font-medium">{testimonial.name}</cite>
                                            {testimonial.company && (
                                                <span className="text-muted-foreground block text-sm">{testimonial.company}</span>
                                            )}
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
