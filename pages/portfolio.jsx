import React, { useState, useContext } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Styled-components
import { TitleSection, ContainerTitleSection, BodyText } from "@/styles/ui";

//Ícones
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Filter } from "@styled-icons/fa-solid/Filter";
import { Live } from "@styled-icons/fluentui-system-filled/Live";

//Custom components
import Tooltip from "@/components/Tooltip";
import Image from "next/image";
import { Expo, Firebase, Materialui, Netlify, Nextdotjs, Redux, Spring, Styledcomponents, Supabase, Typescript } from "styled-icons/simple-icons";
import { Flutter, Git } from "styled-icons/boxicons-logos";
import { Aws, Laravel, Bootstrap, Algolia, Angular, Node } from "styled-icons/fa-brands";

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 60%;
	gap: 20px;
	transition: all 0.3s ease;

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const WrapperProjectCard = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	min-height: 270px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	padding: 20px;
	transition: all 0.3s ease;
	border: 1px solid ${(props) => props.theme.colors.backgroundPage};

	.created_at {
		color: ${(props) => props.theme.colors.inactiveTitle};
		font-size: 12px;
		position: absolute;
		bottom: 10px;
	}

	:hover {
		border: 1px solid ${(props) => props.theme.colors.branding};
		//transform: scale(1.01);
		//box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
		// -webkit-box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
		// -moz-box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
	}

	.title-body {
		margin-top: 50px;

		.divider {
			margin-bottom: 20px;
		}
	}
`;

const WrapperTechStack = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	height: 34px;
	width: 100%;
	margin-bottom: 10px;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}

	svg {
		width: 22px;
		height: 22px;
		margin-right: 3px;
		color: ${(props) => props.theme.colors.inactiveTitle};
		transition: all 0.3s ease;
	}

	a {
		svg {
			&:hover {
				cursor: pointer;
				color: ${(props) => props.theme.colors.branding};
			}
		}
	}
`;

const WrapperTextChip = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	top: 10px;
	right: 10px;

	div {
		span {
			//border: 1px solid ${(props) => props.theme.colors.branding};
			color: ${(props) => props.theme.colors.inactiveTitle};
			font-size: 12px;
			font-weight: 800;
			padding: 2px 8px 2px 8px;
			border-radius: 4px;
			margin-right: 3px;
			margin-left: 3px;
		}

		@media (max-width: 601px) {
			margin-bottom: 10px;
			font-size: 10px;
		}
	}

	@media (max-width: 601px) {
		display: none;
	}
`;

const ChipTechOptions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 20px;
	margin-bottom: 20px;
	//background-color: #ccc;
	width: 60%;

	svg {
		min-width: 28px;
		min-height: 28px;
		width: 28px;
		height: 28px;
		color: ${(props) => props.theme.colors.branding};
		margin-right: 10px;

		@media (max-width: 601px) {
			min-width: 18px;
			min-height: 18px;
			width: 18px;
			height: 18px;
		}
	}

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 601px) {
		display: none;
	}
`;

const WrapperButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	/* position: absolute;
	right: 10px;
	bottom: 10px; */
	transition: all 0.3s ease;

	a {
		//background-color: ${(props) => props.theme.colors.branding};
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		padding: 5px;
		color: ${(props) => props.theme.colors.branding};
		//border: solid 1px ${(props) => props.theme.colors.branding};
		border-radius: 4px;
		//margin-left: 3px;
	}
`;

const Chip = styled.span`
	color: ${(props) => (props.active == true ? props.theme.colors.backgroundSecondary : props.theme.colors.inactiveTitle)};
	background-color: ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.backgroundSecondary)};
	border: 1px solid ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.inactiveTitle)};
	padding: 2px 7px 3px 7px;
	margin: 3px;
	border-radius: 4px;
	font-weight: 700;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 601px) {
		font-weight: 700;
		font-size: 10px;
	}
`;

export const TitleSpan = styled.h3`
	z-index: 2;
	position: absolute;
	top: 0;
	left: 0;
	padding: 5px 15px 5px 10px;
	color: ${(props) => props.theme.colors.backgroundPage};
	background-color: ${(props) => props.theme.colors.branding};
	font-size: ${(props) => props.theme.fontSizes.md};
	border-radius: 4px 0 18px 0;

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}

	@media (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.xs};
	}
`;

const SectionPortifolio = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	padding-top: 60px;
`;

const ButtonP = styled.a`
	z-index: 1;
	position: relative;
	width: 200px;
	height: 44px;
	margin-top: 15px;
	margin-bottom: 15px;
	font-size: ${(props) => props.theme.fontSizes.lg};
	transition: all 0.3s ease;
	border: none;
	
	text-decoration: none;
	color: ${(props) => props.theme.colors.background};
	border-radius: 4px;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	@media (max-width: 601px) {
		width: 100%;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

export default function Portifolio() {
	const { language } = useContext(SettingsContext);
	const [stack, setStack] = useState(language.portifolioPage.labelFilter);
	const [view, setView] = useState("grid");

	let projects = [
		{
			id: 1,
			title: language.portifolioPage.projects.id_1.title,
			description: language.portifolioPage.projects.id_1.description,
			liveDemoUrl: null,
			image:"/img/1.png",
			techs: [
				<Tooltip toolTipText="Angular">
					<Angular />
				</Tooltip>,
				<Tooltip toolTipText="Supabase">
					<Supabase />
				</Tooltip>,
				<Tooltip toolTipText="Algolia">
					<Algolia />
				</Tooltip>
			],
			sourceCodeLink: "https://go.goboxapp.com/",
			typeProject: ["MOVIL", "*"]
		},
		{
			id: 2,
			title: language.portifolioPage.projects.id_2.title,
			description: language.portifolioPage.projects.id_2.description,
			liveDemoUrl: null,
			image:"/img/2.png",
			techs: [
				<Tooltip toolTipText="Flutter">
					<Flutter />
				</Tooltip>,
				<Tooltip toolTipText="Laravel">
					<Laravel />
				</Tooltip>,
				<Tooltip toolTipText="Node">
					<Node />
				</Tooltip>
			],
			sourceCodeLink: "https://mrdelivery.com.bo/",
			typeProject: ["WEB", "*"]
		},{
			id: 3,
			title: language.portifolioPage.projects.id_3.title,
			description: language.portifolioPage.projects.id_3.description,
			liveDemoUrl: null,
			image:"/img/3.png",
			techs: [
				<Tooltip toolTipText="Flutter">
					<Flutter />
				</Tooltip>,
				<Tooltip toolTipText="Laravel">
					<Laravel />
				</Tooltip>,
				<Tooltip toolTipText="Node">
					<Node />
				</Tooltip>
			],
			sourceCodeLink: "https://apptingo.com/info/",
			typeProject: ["MOVIL", "*"]
		},
		{
			id: 4,
			title: language.portifolioPage.projects.id_4.title,
			description: language.portifolioPage.projects.id_4.description,
			liveDemoUrl: null,
			image:"/img/4.png",
			techs: [
				<Tooltip toolTipText="Amazon Web Service">
					<Aws />
				</Tooltip>,
				<Tooltip toolTipText="Laravel">
					<Laravel />
				</Tooltip>,
				<Tooltip toolTipText="Bootstrap">
					<Bootstrap />
				</Tooltip>,
				<Tooltip toolTipText="React Expo">
					<Expo />
				</Tooltip>,
				<Tooltip toolTipText="Git">
					<Git />
				</Tooltip>
			],
			sourceCodeLink: "https://github.com/Matute95/ParentalControl",
			typeProject: ["MOVIL", "*"]
		},{
			id: 5,
			title: language.portifolioPage.projects.id_5.title,
			description: language.portifolioPage.projects.id_5.description,
			liveDemoUrl: null,
			image:"/img/5.png",
			techs: [
				<Tooltip toolTipText="ReactJS">
					<ReactLogo />
				</Tooltip>,
				<Tooltip toolTipText="Firebase">
					<Firebase />
				</Tooltip>,
				<Tooltip toolTipText="Redux">
					<Redux />
				</Tooltip>,
				<Tooltip toolTipText="Css">
					<Css3 />
				</Tooltip>,
				<Tooltip toolTipText="Netlify">
					<Netlify />
				</Tooltip>
			],
			sourceCodeLink: "https://app-comida-matias.netlify.app",
			typeProject: ["WEB", "*"]
		},{
			id: 6,
			title: language.portifolioPage.projects.id_6.title,
			description: language.portifolioPage.projects.id_6.description,
			liveDemoUrl: null,
			image:"/img/6.png",
			techs: [
				<Tooltip toolTipText="Next">
					<Nextdotjs />
				</Tooltip>,
				<Tooltip toolTipText="Typescript">
					<Typescript />
				</Tooltip>,
				<Tooltip toolTipText="Css">
					<Css3 />
				</Tooltip>,
				<Tooltip toolTipText="Netlify">
					<Netlify />
				</Tooltip>
			],
			sourceCodeLink: "https://hoja-de-calculo-matias.netlify.app",
			typeProject: ["MOVIL", "*"]
		},{
			id: 7,
			title: language.portifolioPage.projects.id_7.title,
			description: language.portifolioPage.projects.id_7.description,
			liveDemoUrl: null,
			image:"/img/7.png",
			techs: [
				<Tooltip toolTipText="Next">
					<Nextdotjs />
				</Tooltip>,
				<Tooltip toolTipText="Typescript">
					<Typescript />
				</Tooltip>,
				<Tooltip toolTipText="Css">
					<Css3 />
				</Tooltip>,
				<Tooltip toolTipText="Netlify">
					<Netlify />
				</Tooltip>
			],
			sourceCodeLink: "https://hoja-de-calculo-matias.netlify.app",
			typeProject: ["MOVIL", "*"]
		},{
			id: 8,
			title: language.portifolioPage.projects.id_8.title,
			description: language.portifolioPage.projects.id_8.description,
			liveDemoUrl: null,
			image:"/img/8.jpg",
			techs: [
				<Tooltip toolTipText="Next">
					<Nextdotjs />
				</Tooltip>,
				<Tooltip toolTipText="Typescript">
					<Typescript />
				</Tooltip>,
				<Tooltip toolTipText="Css">
					<Css3 />
				</Tooltip>,
				<Tooltip toolTipText="Netlify">
					<Netlify />
				</Tooltip>
			],
			sourceCodeLink: "https://hoja-de-calculo-matias.netlify.app",
			typeProject: ["WEB", "*"]
		}
	];

	React.useEffect(() => {
		setArray_projects(projects)
	  }, [language]);


	function handleFilter(id) {
		const p = projects.filter((item) => item.typeProject.includes(id))
		setArray_projects(p)
	}

	function handleView(event) {
		setView(event.target.id);
	}
	
	const [array_projects, setArray_projects] = useState(projects);
	return (
		<SectionPortifolio id="section-portifolio">
			<ContainerTitleSection>
				<TitleSection>{language.portifolioPage.title}</TitleSection>
			</ContainerTitleSection>

			<ChipTechOptions>
				<Filter className="svg" />
				<Chip
					id="*"
					onClick={(event) => {
						handleFilter(event.target.id);
						setStack(event.target.id)
					}}
					active={stack.includes("*") ? true : false}>
					{language.portifolioPage.labelFilter}
				</Chip>
				<Chip
					id="WEB"
					onClick={(event) => {
						handleFilter(event.target.id);
						setStack(event.target.id);
					}}
					active={stack.includes("WEB") ? true : false}>
					WEB
				</Chip>
				<Chip
					id="MOVIL"
					onClick={(event) => {
						handleFilter(event.target.id);
						setStack(event.target.id);
					}}
					active={stack.includes("MOVIL") ? true : false}>
					MOVIL
				</Chip>
			</ChipTechOptions>

			<ContainerGrid view={view}>
				{array_projects.map((project, index) => (
					<ScrollAnimation animateIn="fadeIn" animateOnce key={index}>
						<WrapperProjectCard>
							<WrapperTextChip>
								{project.typeProject.map((chip, idx) => (
									<div key={idx}>
										<span>{chip}</span>
									</div>
								))}
							</WrapperTextChip>

							<TitleSpan>{project.title}</TitleSpan>
							<div className="title-body">
								<BodyText>{project.description}</BodyText>
								<Image src={project.image} alt="MR" height={350} width={600} objectFit="scale-down"/>
							</div>
							<WrapperTechStack>
								<div>
									{project.techs.map((icone, i) => (
										<div key={i}>{icone}</div>
									))}
								</div>
								{/* <a href={project.sourceCodeLink} target="_blank" rel="noreferrer">
									<GithubOutline />
								</a> */}
								<WrapperButtons>
									{project.liveDemoUrl != null && (
										<a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
											<Live />
										</a>
									)}

									<a href={project.sourceCodeLink} target="_blank" rel="noreferrer">
										<ButtonP>{language.portifolioPage.view}</ButtonP>
									</a>
								</WrapperButtons>
							</WrapperTechStack>
						</WrapperProjectCard>
					</ScrollAnimation>
				))}
			</ContainerGrid>
		</SectionPortifolio>
	);
}
