import Image from 'next/image'
import Link from 'next/link'
import githubMark from '../../public/github-mark.png'

const FooterComponent = () => {
	return (
		<div className="container">
			<nav className="navbar sticky-bottom">
				<div
					className="container justify-content-center"
					style={{ color: 'rgb(98, 98, 98)' }}
				>
					Ruby Lo @2023
					<Link href="https://github.com/rubylo718">
						<Image
							src={githubMark}
							alt="Github"
							width={20}
							height={20}
							style={{ margin: '3px' }}
						/>
					</Link>
				</div>
			</nav>
		</div>
	)
}

export default FooterComponent
