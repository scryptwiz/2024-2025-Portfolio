import { Box, Code, Server } from "lucide-react"
import Card from "./card"
import FadeInAnimation from "../common/FadeInAnimation";

const Introduction = () => {
	const tech_stack = [
		"Typescript",
		"React.js",
		"Three Js",
		"Node.js",
		"Python",
		"Javascript ES6+"
	];

	return (
		<FadeInAnimation delay="0.5s">
			<div className='flex md:flex-row flex-col-reverse justify-between items-center py-20 gap-10'>
				<div className='md:w-1/2 w-full flex flex-col gap-3 shadow-xl'>
					<Card title="Frontend Developer" description="Specializing in creating visually appealing and user-friendly web interfaces" Icon={Code} />
					<Card title="Three JS Developer" description="Skilled in developing interactive 3D graphics and animations using Three.js" Icon={Box} />
					<Card title="Backend Developer" description="Expert in building robust and scalable server-side applications" Icon={Server} />
				</div>
				<div className='md:w-1/2 w-full flex flex-col gap-7'>
					<p className='tracking-wider text-sm'>Introduce</p>
					<h1 className='font-medium text-5xl tracking-wider'>Hello! I'm Kelvin Ajayi</h1>
					<p className='text-2xl italic tracking-wider'>Every great design with an even better story</p>
					<p className='text-sm tracking-wider'>I am a passionate developer with expertise in both frontend and backend technologies. I enjoy creating seamless user experiences and robust server-side applications. My skills also extend to developing interactive 3D graphics using Three.js, bringing creative ideas to life. I have been recognized with award-winning projects in the field.</p>
					<div className="about-description">
						{"Here are some technologies I have been working with:"}
						<ul className="tech-stack">
							{tech_stack.map(function (tech_item, i) {
								return (
									<FadeInAnimation delay={`${i + 1}00ms`}>
										<li>{tech_item}</li>
									</FadeInAnimation>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</FadeInAnimation>
	)
}

export default Introduction