import FadeInAnimation from "../common/FadeInAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

type ExperienceItem = {
	jobTitle: string;
	duration: string;
	desc: string[];
};

const experienceItems: Record<string, ExperienceItem> = {
	Amazon: {
		jobTitle: "Software Development Engineer ",
		duration: "JUL 2022 - PRESENT",
		desc: [
			"Led development of end-to-end region build automation across Route 53 (AWS's DNS web service). This enabled the launch of customer-facing global services in new regions within a day, a significant reduction from the previous time-frame of a month.",
			"Re-built Route 53's core domain management and DNS systems to provide a better user experience to millions of customers."
		]
	},
	Wattpad: {
		jobTitle: "Associate Engineer ",
		duration: "MAY 2020 - APR 2021",
		desc: [
			"Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).",
			"Iteratively built web experiences for 80 million users across high-traffic pages.",
			"Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations."
		]
	},
	"University of Toronto": {
		jobTitle: "Research Engineer ",
		duration: "MAY 2021 - SEPT 2021",
		desc: [
			"Developed and researched an NLP-based framework using state-of-the-art tools like Spacy and Stanza to facilitate the derivation of requirements from health data by leveraging syntactic dependencies, entity-recognition and rule-based match-making.",
			"Application selected for DCS Research Award ($4,000) as part of the 'Visualizing Privacy Analysis Results' project led by Professor Marsha Chechik."
		]
	},
	Centivizer: {
		jobTitle: "Software Developer ",
		duration: "SEPT 2019 - APR 2020",
		desc: [
			"Developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
			"Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia."
		]
	},
	"Orange Gate": {
		jobTitle: "Software Developer Intern ",
		duration: "MAY 2019 - AUG 2019",
		desc: [
			"Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sensors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home.",
			"Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
			"Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB."
		]
	}
};

const Experience: React.FC = () => {
	return (
		<div className="flex gap-6">
			{/* ShadCN Tabs (Vertical) */}
			<Tabs defaultValue="Amazon" orientation="vertical" className="flex flex-col md:flex-row">
				{/* Tabs List */}
				<TabsList className="flex flex-col gap-4 border-r-2 border-gray-200 pr-4 text-left h-full">
					{Object.keys(experienceItems).map((key) => (
						<TabsTrigger
							key={key}
							value={key}
							className="text-left py-2 text-sm font-medium hover:text-active focus:outline-none ring-0 focus:border-active w-full"
						>
							{key}
						</TabsTrigger>
					))}
				</TabsList>

				{/* Tabs Content */}
				{Object.keys(experienceItems).map((key) => (
					<TabsContent key={key} value={key} className="pl-4 pr-">
						<h3 className="text-lg font-semibold">
							{experienceItems[key].jobTitle} <span className="text-active">@ {key}</span>
						</h3>
						<p className="mt-2 text-sm">
							{experienceItems[key].duration}
						</p>
						<ul className="mt-4 list-disc pl-5 space-y-2 job-description">
							{experienceItems[key].desc.map((item, idx) => (
								<FadeInAnimation key={idx} delay={`${idx + 1}00ms`}>
									<li className="text-sm">
										{item}
									</li>
								</FadeInAnimation>
							))}
						</ul>
					</TabsContent>
				))}
			</Tabs>
		</div>
	)
}

export default Experience