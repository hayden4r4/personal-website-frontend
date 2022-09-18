import textShadowGenerator from '../Utilities/TextEffects';
export default function IndexBody() {
	return (
		<div className="indexBody">
			<div className="indexBodyWelcome">
				<h1 id="indexBodyWelcomeText" style={{ textShadow: textShadowGenerator(0, .1, .0025) }}>
					Please hire me
				</h1>
			</div>
		</div>
	);
}
