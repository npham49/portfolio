import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ReactNode } from 'react'
import { config } from '@/config'
import HeaderTitle from './util/header-title'

export default function Skills() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent w-full" id="skills">
            <div className=" mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <HeaderTitle className=" ">{config.skills.title}</HeaderTitle>
                    <p className="mt-4">{config.skills.description}</p>
                </div>
                <div className="grid max-w-full lg:grid-cols-3 mx-auto mt-8 grid  gap-6 *:text-center md:mt-16">
                    {config.skills.items.map((skill, index) => (
                        <Card key={index} className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    {skill.icon}
                                </CardDecorator>

                                <h3 className="mt-6 font-medium">{skill.title}</h3>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm">{skill.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
