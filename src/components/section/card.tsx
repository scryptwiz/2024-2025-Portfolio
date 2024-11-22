import { GitBranchPlus } from "lucide-react"

const Card = () => {
	return (
		<div className="bg-primary p-8 rounded-xl">
			<div className="flex justify-between gap-3">
				<div>
					<h4 className="text-active text-2xl tracking-wider font-medium">Design</h4>
					<p className="mt-2 tracking-wider text-sm">Create digital products with unique ideas</p>
				</div>
				<GitBranchPlus className="text-active text-lg" />
			</div>
		</div>
	)
}

export default Card