export const SITE = {
	name: "Devver",
	title: "Devver — The fast lane from code to feedback",
	description:
		"Devver is a test deployment service. Deploy a Git revision locally or in the cloud from your terminal, get a URL, and share it with your team.",
	install: "npm install -g @devver-inc/cli",
} as const;

export const LINKS = {
	docs: "https://docs.devver.app/docs",
	quickstart: "https://docs.devver.app/docs/quickstart",
	app: "https://app.devver.app",
	github: "https://github.com/Devver-Inc/cli",
	organization: "https://github.com/Devver-Inc",
	releases: "https://github.com/Devver-Inc/cli/releases",
	npm: "https://www.npmjs.com/package/@devver-inc/cli",
} as const;

export const NAV = [
	{ label: "Docs", href: LINKS.docs },
	{ label: "GitHub", href: LINKS.github },
	{ label: "Log in", href: LINKS.app },
] as const;

export const FOOTER_LINKS = [
	{ label: "Docs", href: LINKS.docs },
	{ label: "GitHub", href: LINKS.github },
	{ label: "npm", href: LINKS.npm },
	{ label: "Releases", href: LINKS.releases },
] as const;

export const LOOP_STEPS = [
	{
		title: "Deploy",
		description:
			"Run one command from a Git checkout, on your machine or in the cloud.",
	},
	{
		title: "Test",
		description: "Every deployment is a concrete revision with its own URL.",
	},
	{
		title: "Share",
		description:
			"Send the cloud URL to teammates, or use it in your agent-assisted review.",
	},
	{
		title: "Next feature",
		description: "Iterate with people and agents, then move on.",
	},
] as const;

export const TARGETS = {
	headers: ["", "Local", "Cloud"],
	rows: [
		[
			"Best for",
			"Testing a committed static site on your machine",
			"Sharing a test deployment with your team",
		],
		[
			"Setup",
			"`devver new server <name>`, no account",
			"`devver cloud` and `devver auth login`",
		],
		[
			"URL",
			"Loopback, not publicly shareable",
			"Printed by `devver deploy`, ready to share",
		],
	],
} as const;

export const CHANNELS = {
	headers: ["Channel", "Command", "What you get"],
	rows: [
		["Stable", "`npm install -g @devver-inc/cli`", "Latest stable release"],
		[
			"Nightly",
			"`npm install -g @devver-inc/cli@nightly`",
			"Builds from `develop`",
		],
		[
			"Preview",
			"`npm install -g @devver-inc/cli@dev`",
			"Opt-in development build",
		],
	],
} as const;

export const FAQ = [
	{
		question: "What is Devver?",
		answer:
			"Devver is a test deployment service for the space between writing code and shipping a feature. You deploy a revision from your terminal, get a URL, and test or share it.",
	},
	{
		question: "Do I need an account?",
		answer:
			"Not to test locally: a local server needs no account. Cloud deployments need an account, a project and a supported project configuration.",
	},
	{
		question: "Can my teammates open a local deployment?",
		answer:
			"No. A local URL stays on your machine. Use the cloud when teammates need to open the deployment.",
	},
	{
		question: "Does Devver collect feedback for me?",
		answer:
			"No. Share the cloud URL in the conversations and tools where your team already works.",
	},
	{
		question: "Are local deployments sandboxed?",
		answer:
			"No. Local deployments run with your user account's permissions, so only deploy code you trust. The local API and proxy bind to loopback.",
	},
	{
		question: "Which platforms are supported?",
		answer:
			"macOS 14 or later on Apple Silicon, and Linux x64. Windows releases are paused pending runtime verification. Node is needed to install the npm package, not to run devver.",
	},
] as const;

export type TerminalSpan = {
	text: string;
	tone?: "dim" | "accent";
};

export type TerminalLine = string | readonly TerminalSpan[];

export const DEPLOY_OUTPUT: readonly TerminalLine[] = [
	[{ text: "$ ", tone: "dim" }, { text: "devver deploy" }],
	"",
	"  Deployment Summary:",
	"    Repository: boutique",
	"    Branch: feat/checkout-v2",
	"    Commit: 8f3a2c1",
	"",
	"Deployment created successfully!",
	[{ text: "    Deployment ID: " }, { text: "dep_4n7q2x", tone: "dim" }],
	[
		{ text: "    Web URL: " },
		{ text: "https://checkout.boutique.devver.app", tone: "accent" },
	],
];

export const COMMANDS = [
	{ name: "deploy", description: "deploy the committed revision" },
	{ name: "init", description: "create the project's config" },
	{ name: "new server", description: "create and attach a local server" },
	{ name: "cloud", description: "switch to Devver cloud" },
	{ name: "auth login", description: "sign in from the browser" },
	{ name: "project list", description: "select your project" },
	{ name: "secret", description: "manage environment secrets" },
] as const;
