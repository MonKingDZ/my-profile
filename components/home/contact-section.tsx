import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl scroll-mt-20 px-4 py-16 sm:py-24"
    >
      <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        联系我
      </h2>
      <p className="mt-4 max-w-xl text-muted-foreground">
        欢迎通过邮箱与我联系，或下载我的简历了解更多。
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="mailto:dengzhaoz@qq.com"
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        >
          发送邮件
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          下载简历
        </a>
      </div>
    </section>
  );
}
