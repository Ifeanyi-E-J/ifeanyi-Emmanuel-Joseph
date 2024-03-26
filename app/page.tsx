import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";

export default function Home() {
	const latestPosts = sortPosts(posts).slice(0, 3);
	return (
		<>
			<section className="space-y-6 py-5 md:py-6 lg:py-7">
				<div className="container flex flex-col gap-4 text-center">
					<h1 className="text-3xl sm:5xl md:6xl lg:7xl font-black text-balance">
						Hi, I&apos;m Ifeanyi
					</h1>
					<p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
						Welcome to my website, built using tailwind, shadcn, velite and Next
						14.
					</p>
					<div className="flex flex-col gap-4 justify-center sm:flex-row">
						<Link
							target="_blank"
							rel="noreferrer"
							href={siteConfig.links.resume}
							className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
						>
							Download Resume
						</Link>
						<Link
							target="_blank"
							rel="noreferrer"
							href={siteConfig.links.github}
							className={cn(
								buttonVariants({ variant: "outline", size: "lg" }),
								"w-full sm:w-fit"
							)}
						>
							Github
						</Link>
					</div>
				</div>
			</section>

			<section className="container max-w-4xl py-4 lg:py-8 flex flex-col space-y-6 mt-20">
				<h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
					Latest Posts
				</h2>
				<ul className="flex flex-col">
					{latestPosts.map((post) => (
						<li
							key={post.slug}
							className="first:border-t first:border-border"
						>
							<PostItem
								slug={post.slug}
								title={post.title}
								description={post.description}
								date={post.date}
							/>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
