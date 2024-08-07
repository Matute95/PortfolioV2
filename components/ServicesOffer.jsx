import React, { useContext } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { Robot } from "@styled-icons/fa-solid/Robot";
import { DesignServices } from "@styled-icons/material-rounded/DesignServices";
import { DesignIdeas } from "@styled-icons/fluentui-system-filled/DesignIdeas";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";
import { Angular, Aws, Bootstrap, Css3Alt, Docker, Html5, Js, Node, Php, Python, ReactLogo } from "styled-icons/fa-brands";
import { Firebase } from '@styled-icons/boxicons-logos/Firebase';
import { Materialdesign } from '@styled-icons/simple-icons/Materialdesign';
import { Supabase } from '@styled-icons/simple-icons/Supabase';
import { Flutter, TailwindCss } from "styled-icons/boxicons-logos";
import Tooltip from "@/components/Tooltip";

const CardService = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 275px;
	padding: 20px;
	transition: all 0.3s ease;
	border: 3px solid transparent;

	//Espelhar elemento
	//-webkit-box-reflect: below px linear-gradient(transparent, transparent, #0004);

	/* 
	transform-origin: center;
	transform: perspective(800px) rotateY(25deg);
	transition: 0.5s;

	&:hover img {
		opacity: 0.3;
	}
	&:hover {
		transform: perspective(800px) rotateY(0deg);
		opacity: 1;
	} */

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}

	h3 {
		color: ${(props) => props.theme.colors.branding};
		font-size: 20px;
		font-weight: 900;
		margin-top: 5px;
		margin-bottom: 20px;

		@media (max-width: 900px) {
			font-size: 18px;
		}
	}

	p {
		color: ${(props) => props.theme.colors.body};
		font-size: 16px;
		font-weight: 400;
		text-align: center;
		word-wrap: break-word;

		@media (max-width: 900px) {
			font-size: 14px;
		}
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	transition: all 0.3s ease;
	gap: 20px;
	justify-items: center;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
		width: 85%;
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
		//margin-top: 60px;
		width: 100%;
	}
`;

const SectionServices = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	padding-top: 60px;
`;

const Tech = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-width: 100px;
	height: 44px;
	//background-color: ${(props) => props.theme.colors.backgroundSecondary};
	padding: 15px;
	border-radius: 4px;

	svg {
		width: 45px;
		height: 45px;
		color: ${(props) => props.theme.colors.backgroundSecondary};
		transition: all 0.3s ease;
		padding: 2px;
	}

	svg:hover {
		color: ${(props) => props.theme.colors.branding};
	}
`;

const icon = (icono, text) =>{
	return (
		<Tech>
		<Tooltip toolTipText={text[0]}>
			{icono[0]}
		</Tooltip>
		<Tooltip toolTipText={text[1]}>
			{icono[1]}
		</Tooltip>
		<Tooltip toolTipText={text[2]}>
			{icono[2]}
		</Tooltip>
		<Tooltip toolTipText={text[3]}>
			{icono[3]}
		</Tooltip>
		</Tech>
	)
}

export default function _ServicesOffer() {
	const { language } = useContext(SettingsContext);

	return (
		<SectionServices id="section-services">
		<CardService>
			<h3>{language.servicesOffer.title}</h3>
		</CardService>
			<ContainerGrid>
				<ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
					<CardService>
						<Robot />
						<h3>{language.servicesOffer.cards.develop.title}</h3>
						{icon([<Js />,<Php />,<Python />,<Html5 />],['Java Script','PHP','Python','Html5'])}
						<p>{language.servicesOffer.cards.develop.contentText}</p>
					</CardService>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" animateOnce delay={400}>
					<CardService>
						<DesignIdeas />
						<h3>{language.servicesOffer.cards.design.title}</h3>
						{icon([<Css3Alt />,<Materialdesign />,<TailwindCss />,<Bootstrap />],['CSS','Material UI','Tailwind','Bootstrap'])}
						<p>{language.servicesOffer.cards.design.contentText}</p>
					</CardService>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" animateOnce delay={600}>
					<CardService>
						<CodeBlock />
						<h3>{language.servicesOffer.cards.framework.title}</h3>
						{icon([<Node />,<ReactLogo />,<Flutter />,<Angular />],['Node','React.Js','Flutter','Angular'])}
						<p>{language.servicesOffer.cards.framework.contentText}</p>
					</CardService>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" animateOnce delay={800}>
					<CardService>
						<DesignServices />
						<h3>{language.servicesOffer.cards.tools.title}</h3>
						{icon([<Supabase/>, <Docker/>,<Aws/>,<Firebase/>],['Supabase','Doker','Amazon Web Service','Firebase'])}
						<p>{language.servicesOffer.cards.tools.contentText}</p>
					</CardService>
				</ScrollAnimation>
			</ContainerGrid>
		</SectionServices>
	);
}