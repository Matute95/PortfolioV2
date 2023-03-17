import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Custom components
import LanguageSwitchButton from "@/components/LanguageSwitchButton";


const FooterContainer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	margin-top: 60px;

	#grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 20px;
		grid-row-gap: 0px;
		transition: all 0.3s ease;
		width: 60%;
		text-align: center;

		@media (max-width: 1200px) {
			width: 80%;
		}

		@media (max-width: 1000px) {
			grid-template-columns: repeat(4, 1fr);
		}

		@media (max-width: 800px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 601px) {
			width: 100%;
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

const Divider = styled.div`
	width: 100%;
	border-top: 1px solid ${(props) => props.theme.colors.backgroundSecondary};
	margin-top: 20px;
`;

const SectionFooterMenu = styled.div`
	display: flex;
	align-content: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	height: 100%;
	//border: 1px solid #000;
	padding: 5px;
`;

const FooterTextTitle = styled.h4`
	font-weight: 800;
	color: ${(props) => props.theme.colors.branding};
`;

const FooterText = styled.span`
	position: relative;
	font-weight: 400;
	font-size: 14px;
	color: ${(props) => props.theme.colors.subtitle};
	transition: all 0.3s ease;
	margin-top: 3px;
	margin-bottom: 3px;
	text-transform: capitalize;

	&:hover {
		cursor: pointer;
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		height: 2px;
		background-color: ${(props) => props.theme.colors.branding};
		transform: scaleX(0);
		transition: transform 0.5s ease;
	}

	&::before {
		top: 0;
		transform-origin: center right;
	}

	&:hover::before {
		transform-origin: center left;
		transform: scaleX(1);
	}

	&::after {
		bottom: 0;
		transform-origin: center left;
	}

	&:hover::after {
		transform-origin: center right;
		transform: scaleX(1);
	}
`;

const TextBuildProject = styled.h4`
	font-weight: 800;
	color: ${(props) => props.theme.colors.branding};
	font-size: 14px;

	span {
		font-weight: 400;
	}
`;

const ContainerBuildCopyright = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	transition: all 0.3s ease;
	width: 60%;
	margin-top: 20px;
	margin-bottom: 20px;

	.build-and-button-top {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 1200px) {
		width: 80%;
	}

	@media (max-width: 601px) {
		flex-direction: column;
		margin-bottom: 110px;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

export default function FooterPage(props) {
	const { language } = useContext(SettingsContext);
	return (
		<FooterContainer>
			<div>
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<SectionFooterMenu>
						<FooterTextTitle>{language.footer.labelNavigation.title}</FooterTextTitle>
						<Link href="#section-home" passHref>
							<FooterText>{language.footer.labelNavigation.labelHome}</FooterText>
						</Link>
						<Link href="#section-services" passHref>
							<FooterText>{language.footer.labelNavigation.labelServices}</FooterText>
						</Link>
						<Link href="#section-sobre-mim" passHref>
							<FooterText>{language.footer.labelNavigation.labelAboutMe}</FooterText>
						</Link>
						<Link href="#section-portifolio" passHref>
							<FooterText>{language.footer.labelNavigation.labelPortifolio}</FooterText>
						</Link>
						<Link href="#section-experiencia" passHref>
							<FooterText>{language.footer.labelNavigation.labelExperience}</FooterText>
						</Link>
					</SectionFooterMenu>
				</ScrollAnimation>
			</div>
			<Divider />
			<ContainerBuildCopyright>
				<LanguageSwitchButton />
				<div className="build-and-button-top">
					<TextBuildProject>
					© MATIAS REJAS GUERRA, 2023
					</TextBuildProject>
				</div>
			</ContainerBuildCopyright>
		</FooterContainer>
	);
}
